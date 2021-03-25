import { ReplaceSessionResponse } from "../type/ResponseModels";
import { ReplaceSessionRequest } from "../type/RequestModels";
import { ajax } from "../network";
import { NetworkService } from "../NetworkService";

// Attention: This file is generated by "yarn api", do not modify

export class SessionWebService {
    static replaceSession(request: ReplaceSessionRequest): Promise<ReplaceSessionResponse> {
        return NetworkService.ajax("PUT", "/mobile-system/session", {}, request);
    }
}