import {
	SearchCustomerMessageResponse,
	SearchCustomerMessageRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class CustomerMessagePageWebService {

	static searchMessage(request: SearchCustomerMessageRequest): Promise<SearchCustomerMessageResponse> {
		return NetworkService.ajax("GET", "/message-page/message", {}, request);
	}

}