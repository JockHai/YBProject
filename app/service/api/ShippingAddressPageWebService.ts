import {
	SearchShippingAddressesResponse,
	SearchShippingAddressesRequest,
	CreateShippingAddressResponse,
	CreateShippingAddressRequest,
	UpdateShippingAddressResponse,
	UpdateShippingAddressRequest,
	ListStateResponse,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class ShippingAddressPageWebService {

	static search(request: SearchShippingAddressesRequest): Promise<SearchShippingAddressesResponse> {
		return NetworkService.ajax("GET", "/shipping-addresses-page/shipping-address", {}, request);
	}

	static create(request: CreateShippingAddressRequest): Promise<CreateShippingAddressResponse> {
		return NetworkService.ajax("POST", "/shipping-addresses-page/shipping-address", {}, request);
	}

	static updateShippingAddress(id: string,request: UpdateShippingAddressRequest): Promise<UpdateShippingAddressResponse> {
		return NetworkService.ajax("PUT", "/shipping-addresses-page/shipping-address/:id", { id }, request);
	}

}