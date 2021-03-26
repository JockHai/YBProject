import {
	SearchCustomerMessageResponse,
	SearchCustomerMessageRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class CustomerMessagePageWebService {

	static searchMessage(request: SearchCustomerMessageRequest): Promise<SearchCustomerMessageResponse> {
		return NetworkService.ajax("GET", "/message-page/message", {}, request);
	}

	static deleteMessage(id: string): Promise<void> {
		return NetworkService.ajax("DELETE", "/message-page/message/:id", { id }, null);
	}

}