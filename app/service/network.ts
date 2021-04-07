// import { APIException, NetworkConnectionException } from "core-native";
import { parseWithDate } from "core-native/lib/util/json-util";
import { APIException, NetworkConnectionException } from "../type/network";
import { APIException as BaseAPIException } from "core-native";
import ErrorCode from "../type/ErrorCode";
import { MobileSystemWebService } from "./api/MobileSystemWebService";
import { NetworkService } from "./NetworkService";
import { Device } from "../util/Device";
import { Platform } from "react-native";
import { ReplaceSessionRequest, ReplaceSessionRequest$OS } from "./type/api";

interface Request extends RequestInit {
    path: string;
    params?: string;
    body?: string;
}

///请求拦截器 用于所有请求前提，对请求做请求前附加操作和请求后操作结果附带处理
declare type RequestInterceptor = (request: Request) => void | Promise<void>;
declare type ResponseInterceptor = (response: Response) => void | Promise<void>;

interface Interceptors {
    request: RequestInterceptor | null;
    response: ResponseInterceptor | null;
}

const networkInterceptor: Interceptors = {
    request: null,
    response: null,
};

export function setRequestInterceptor(_: RequestInterceptor) {
    networkInterceptor.request = _;
}

export function setResponseInterceptor(_: ResponseInterceptor) {
    networkInterceptor.response = _;
}

export async function ajax<TRequest, TResponse>(method: string, path: string, pathParams: object, request: TRequest, action: string): Promise<TResponse> {
    // Replace {:param} in URL path
    if (NetworkService.config.needToRefreshSessionToekn && !NetworkService.config.isRefreshSessionToekn) {
        const requestSession: ReplaceSessionRequest = {
            app_version: Device.version(),
            device_id: Device.deviceId(),
            os: Platform.OS === "android" ? ReplaceSessionRequest$OS.ANDROID : ReplaceSessionRequest$OS.IOS,
            os_version: Device.systemVersion(),
            cpu: Device.device() + "-" + Device.product(),
            firebase_messaging_token: "deS-YkRl-kWdn6-AoV0q69:APA91bE7ENMCaCe1ZoeKQ1dSiCz3GwAVCClLMtaKW-heZ3EOaArn2XYpoFA6ia8F5nmkT8L1uJvtYGqrusDStz5aTubA5DPA0l5RRq59OVa14uFEXFnKtgJ1-U8Jj3o6U3C-spMFluGQ",
            language: "EN",
            manufacturer: Device.manufacture(),
            model_name: Device.model(),
            session_token: NetworkService.config.sessionToken === "" ? null : NetworkService.config.sessionToken,
            mac_address: Device.macAddress()
        }
        NetworkService.config.isRefreshSessionToekn = true
        await MobileSystemWebService.replaceSession(requestSession).then(({ session_token }) => {
            NetworkService.config.sessionToken = session_token
            NetworkService.config.needToRefreshSessionToekn = false
            console.log("请求Session成功：", session_token)
        }).catch(e => {
            console.log("请求Session异常：", e)
            throw e
        }).finally(() => NetworkService.config.isRefreshSessionToekn = false)
    }

    let requestURL = url(path, pathParams);
    const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };
    const requestParameters: Request = { method, headers, path: requestURL };
    if (request) {
        if (method === "GET" || method === "DELETE") {
            requestURL += queryString(request);
            requestParameters.params = queryString(request);
        } else {
            requestParameters.body = JSON.stringify(request);
        }
    }
    if (networkInterceptor.request) {
        await networkInterceptor.request(requestParameters);
    }
    return await fetchWithTimeout(requestURL, requestParameters, `api:${method ? method.toLocaleLowerCase() : method}:${action}`);
}

async function fetchWithTimeout(requestURL: string, requestParameters: Request, action: string): Promise<any> {
    // const ignoreTimeout = checkIgnoreTimeout(requestURL);
    // if (ignoreTimeout) {
    //     return await doFetch(requestURL, requestParameters, action);
    // }
    const promise = doFetch(requestURL, requestParameters, action);
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new NetworkConnectionException(action, 30 * 1000, "time out", requestURL, null));
        }, 30 * 1000);
    });
    return Promise.race([promise, timeoutPromise]);
}

async function doFetch(requestURL: string, requestParameters: Request, action: string, retried?: boolean): Promise<any> {
    const timestamp = new Date().getTime();//请求时间、用于超时所用
    try {
        if (retried && networkInterceptor.request) {
            await networkInterceptor.request(requestParameters);
        }
        const response = await fetch(requestURL, requestParameters).catch(e => {
            throw e
        })
        if (networkInterceptor.response) {
            await networkInterceptor.response(response);
        }
        const responseText = await response.text();
        // API response may be void, in such case, JSON.parse will throw error
        const responseData = responseText ? parseWithDate(responseText) : {};
        if (response.ok) {
            // HTTP Status 200
            return responseData;
            
        } else {
            // Try to get server errorMessage from response
            const errorMessage = responseData && responseData.message ? responseData.message : `failed to call ${requestURL}`;
            const errorId = responseData && responseData.id ? responseData.id : null;
            const errorCode = responseData && responseData.errorCode ? responseData.errorCode : null;
            if (!errorId && (response.status === 502 || response.status === 504)) {
                // Treat "cloud" error as Network Exception, e.g: gateway issue, load balancer unconnected to application server
                // Note: Status 503 is maintenance
                throw new NetworkConnectionException(action, new Date().getTime() - timestamp, `gateway error (${response.status})`, requestURL, {});
            } else {
                throw new APIException(action, new Date().getTime() - timestamp, errorMessage, response.status, requestURL, responseData, errorId, errorCode);
            }
        }
    } catch (e) {
        // Only APIException, NetworkConnectionException can be thrown
        if (e instanceof BaseAPIException) {
            const retry = await handleAPIException(new APIException(action, new Date().getTime() - timestamp, e.message, e.statusCode, e.requestURL, e.responseData, e.errorId, e.errorCode), retried);
            if (retry && !retried) {
                return doFetch(requestURL, requestParameters, action, true);
            }
        } else {
            const error = {
                ...e,
                action,
                elapsedTime: new Date().getTime() - timestamp,
            };
            throw new NetworkConnectionException(action, new Date().getTime() - timestamp, `failed to connect to ${requestURL}`, requestURL, error);
        }
    }
}

export function url(path: string, params: object) {
    let pathWithParams = path;
    Object.entries(params).forEach(([name, value]) => {
        const encodedValue = encodeURIComponent(value.toString());
        pathWithParams = pathWithParams.replace(":" + name, encodedValue);
    });
    return pathWithParams;
}

export function queryString(params: any) {
    if (!params) {
        return "";
    }
    const entries = Object.entries(params);
    if (entries.length === 0) {
        return "";
    }
    return (
        "?" +
        entries
            .filter(_ => _[1] !== null) // If some value is NULL, do not append to URL
            .sort()
            .map(([key, value]) => {
                const valueString = value instanceof Date ? value.toISOString() : (value as any).toString();
                return `${encodeURIComponent(key)}=${encodeURIComponent(valueString)}`;
            })
            .join("&")
    );
}

const handleAPIException = async (error: APIException, retried?: boolean) => {
    const errorCode = error.statusCode;
    if (errorCode === ErrorCode.NOT_FOUND) {
        throw error;
    } else if (errorCode === ErrorCode.UNAUTHORIZED) {
        const retry = await handleUnauthorizedException(error, retried);
        if (retry && !retried) {
            return retry;
        }
        error.errorCode = ErrorCode.UNAUTHORIZED_ERROR;
        throw error;
    } else if (errorCode >= ErrorCode.INTERNAL_SERVER_ERROR) {
        throw error;
    } else {
        throw error;
    }
};

const handleUnauthorizedException = async (error: APIException, retried?: boolean): Promise<boolean> => {
    switch (error.responseData.error_code) {
        case ErrorCode.MISSING_CLIENT_ID:
        case ErrorCode.INVALID_CLIENT:
        case ErrorCode.MISSING_HMAC:
        case ErrorCode.INVALID_HMAC:
        case ErrorCode.MISSING_TIMESTAMP:
        case ErrorCode.INVALID_TIMESTAMP:
        case ErrorCode.DEVICE_ID_NOT_MATCH:
        case ErrorCode.VERSION_UNDEFINED:
        case ErrorCode.FORBIDDEN:
            // app.logger.error({
            //     elapsedTime: error.elapsedTime,
            //     action: error.action,
            //     errorCode: "NETWORK_FORBIDDEN",
            //     errorMessage: error.message,
            //     info: {
            //         errorObject: JSON.stringify(error),
            //     },
            // });
            break;
        case ErrorCode.LOGIN_REQUIRED:
            // UserService.logout();
            // if (Navigation.routes.some(({ name }) => name === "Login")) {
            //     Navigation.switch("Login");
            // } else {
            //     Navigation.resetRoute("Login");
            // }
            break;
        case ErrorCode.INVALID_USER:
            break;
        case ErrorCode.INVALID_SESSION_TOKEN:
        case ErrorCode.MISSING_SESSION_TOKEN:
            // await SessionService.refreshToken();
            if (retried) {
                throw error;
            }
            return true;
        case ErrorCode.INVALID_PASSWORD:
        case ErrorCode.INVALID_VERIFICATION_CODE:
            throw error;
    }
    return false;
};