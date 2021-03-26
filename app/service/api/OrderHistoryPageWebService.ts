import {
	MobileSearchOrderResponse,
	MobileSearchOrderRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class OrderHistoryPageWebService {

	static search(request: MobileSearchOrderRequest): Promise<MobileSearchOrderResponse> {
		return NetworkService.ajax("GET", "/order-history-page/order", {}, request);
	}

}