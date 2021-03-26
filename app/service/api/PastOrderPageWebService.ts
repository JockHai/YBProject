import {
	SearchOrderedProductResponse,
	SearchOrderedProductRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class PastOrderPageWebService {

	static search(request: SearchOrderedProductRequest): Promise<SearchOrderedProductResponse> {
		return NetworkService.ajax("PUT", "/past-order-page/ordered-product", {}, request);
	}

}