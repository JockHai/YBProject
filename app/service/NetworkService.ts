import {ajax, setRequestInterceptor, setResponseInterceptor} from "./network";
import {Platform} from "react-native";
import {createHmac, utf8Encoder} from "./Crypto";
import { Config } from "../config/config";

export const CLIENT_ID = "x-client-id";
export const HMAC = "x-hmac";
export const SESSION_TOKEN = "x-session-token";
export const DEVICE_PLATFORM = "x-platform";
export const CLIENT_VERSION = "x-client-version";

export class NetworkService {

    static readonly config = {
        apiURL: "",
        sessionToken: "",
        secret: "",
        clientId: "",
        needToRefreshSessionToekn: true,
        isRefreshSessionToekn: false
    };

    static getSignature(method: string, host: string, path: string, params: string | null, body: string | null): string {
        let sign = "";
        sign += method.toLocaleUpperCase();
        sign += "\n";
        sign += host;
        sign += "\n";
        sign += path;
        if (params && params.length > 1) {
            sign += "\n" + params.replace("?", "");
        }
        if (body && Object.keys(body)) {
            sign += "\n" + encodeURIComponent(body.toString());
        }
        console.log("body:",body)
        console.log("hmac:",sign)
        return createHmac(sign, this.config.secret);
    }

    static async init(appConfig: Config) {
        NetworkService.config.apiURL = appConfig.apiURL;
        NetworkService.config.clientId = Platform.OS === "android" ? appConfig.androidAPIClientId : appConfig.iOSAPIClientId;
        NetworkService.config.secret = Platform.OS === "android" ? appConfig.androidAPISecretKey : appConfig.iOSAPISecretKey;
        setRequestInterceptor(async request => {
            const signature = this.getSignature(request.method || "GET", this.config.apiURL.replace("https://", "").replace("http://", "").replace(/\:.+/, ""), request.path.replace(this.config.apiURL, ""), request.params || null, request.body || null);
            request.headers = {...request.headers,[SESSION_TOKEN]:(this.config.sessionToken === "" ? "null" : this.config.sessionToken), [HMAC]: signature, [CLIENT_ID]: this.config.clientId, [DEVICE_PLATFORM]:Platform.OS,[CLIENT_VERSION]:"1.1.7"};
            console.log("header:",request.headers)
        });
        setResponseInterceptor(async response => {
            const responseSessionId = response.headers.get("x-customer-logged-in");
            console.log("response-header:",response.headers)
            if (responseSessionId) {
                NetworkService.config.sessionToken = responseSessionId;
            }
        });
    }

    static async ajax<TRequest, TResponse>(method: string, path: string, pathParams: object, request: TRequest): Promise<TResponse> {
        const fullPath = this.config.apiURL + path;
        console.log("request",request)
        return await ajax<TRequest, TResponse>(method, fullPath, pathParams, request, path);
    }
}
