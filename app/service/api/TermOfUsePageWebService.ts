import {
	GetTermOfUseResponse,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class TermOfUsePageWebService {

	static get(): Promise<GetTermOfUseResponse> {
		return NetworkService.ajax("GET", "/term-of-use-page/term-of-use", {}, null);
	}

}