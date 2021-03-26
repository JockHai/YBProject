import {
	ListFAQResponse,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class FAQPageWebService {

	static listFAQ(): Promise<ListFAQResponse> {
		return NetworkService.ajax("GET", "/faq-page/faq", {}, null);
	}

}