import { ErrorListener, Exception, SagaIterator } from "core-native";
import { app } from "core-native/lib/app";
import { JavaScriptException } from "core-native/lib/Exception";
import { Alert } from "react-native";
import { appConfig } from "../config/config";
import PromptConfig from "../config/PromptConfig";
import ErrorCode from "../type/ErrorCode";
import { APIException,NetworkConnectionException } from "../type/network";
import { Navigation } from "./Navigation";

export class ErrorHandler implements ErrorListener {
    *onError(error: Exception): SagaIterator {
        console.log("APIException---APIException--APIException")
        // console.log("APIException---APIException--APIException")
        // if (error instanceof APIException) {
        //     console.log("APIException---APIException--APIException")
        //     if (error.errorCode === ErrorCode.UNAUTHORIZED_ERROR) {
        //         return;
        //     }
        // } else if (error instanceof NetworkConnectionException) {
        //     if (appConfig.env === "QA") {
        //         Alert.alert("NETWORK ERROR", `url is ${error.requestURL}, message is ${error.message}`);
        //     }
        //     app.logger.warn({
        //         action: error.action,
        //         errorCode: "NETWORK_FAILED",
        //         errorMessage: error.message,
        //         elapsedTime: error.elapsedTime,
        //         info: {
        //             requestURL: error.requestURL,
        //             errorObject: JSON.stringify(error),
        //         },
        //     });
        //     Navigation.message(PromptConfig.NETWORK_ERROR);
        //     return;
        // } else if (error instanceof JavaScriptException) {
        //     console.log("in theory, JavaScriptException")
        //     return;
        // } else {
        //     // in theory, should not go to here
        //     console.log("in theory, should not go to here")
        //     if (appConfig.env === "QA") {
        //         Alert.alert("UNKNOWN ERROR: " + JSON.stringify(error));
        //     }
        //     app.logger.error({
        //         elapsedTime: 0,
        //         action: "UNKNOWN_ACTION",
        //         errorCode: "UNKNOWN_ERROR",
        //         errorMessage: error.message,
        //         info: {
        //             errorObject: JSON.stringify(error),
        //         },
        //     });
        // }
    }
}