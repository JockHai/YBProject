import {
	GetOrderDetailResponse,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class OrderDetailPageWebService {

	static get(id: string): Promise<GetOrderDetailResponse> {
		return NetworkService.ajax("GET", "/order-detail-page/order/:id", { id }, null);
	}

}