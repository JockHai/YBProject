import {
	SearchFreebieResponse,
	SearchFreebieRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class FreebiePageWebService {

	static search(request: SearchFreebieRequest): Promise<SearchFreebieResponse> {
		return NetworkService.ajax("GET", "/freebie-page/freebie", {}, request);
	}

}