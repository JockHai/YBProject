import {
	GetMessageSettingResponse,
	UpdateMessageSettingRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class MessageSettingPageWebService {

	static get(): Promise<GetMessageSettingResponse> {
		return NetworkService.ajax("GET", "/message-setting-page/message-setting", {}, null);
	}

	static update(request: UpdateMessageSettingRequest): Promise<void> {
		return NetworkService.ajax("PUT", "/message-setting-page/message-setting", {}, request);
	}

}