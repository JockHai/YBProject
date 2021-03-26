import {
	BatchAddCartItemResponse,
	BatchAddCartItemRequest,
	GetReorderResponse,
	GetReorderRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class ReorderPageWebService {

	static batchAddCartItem(request: BatchAddCartItemRequest): Promise<BatchAddCartItemResponse> {
		return NetworkService.ajax("POST", "/reorder-page/cart/item/batch", {}, request);
	}

	static get(id: string,request: GetReorderRequest): Promise<GetReorderResponse> {
		return NetworkService.ajax("GET", "/reorder-page/reorder/:id", { id }, request);
	}

}