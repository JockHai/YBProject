import {
	GetCartResponse,
	GetCartRequest,
	UpdateCartItemResponse,
	UpdateCartItemRequest,
	RemoveCartItemRequest,
	SaveCartSettingRequest,
	CheckCheckoutResponse,
	CheckCheckoutRequest,
	CartSearchFreebieResponse,
	CartSearchFreebieRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class CartPageWebService {

	static getCart(request: GetCartRequest): Promise<GetCartResponse> {
		return NetworkService.ajax("GET", "/cart-page/cart", {}, request);
	}

	static updateItemQuantity(request: UpdateCartItemRequest): Promise<UpdateCartItemResponse> {
		return NetworkService.ajax("PUT", "/cart-page/cart/item", {}, request);
	}

	static removeCartItem(request: RemoveCartItemRequest): Promise<void> {
		return NetworkService.ajax("DELETE", "/cart-page/cart/item", {}, request);
	}

	static saveCartSetting(request: SaveCartSettingRequest): Promise<void> {
		return NetworkService.ajax("PUT", "/cart-page/cart/setting", {}, request);
	}

	static checkCheckout(request: CheckCheckoutRequest): Promise<CheckCheckoutResponse> {
		return NetworkService.ajax("PUT", "/cart-page/checkout/check", {}, request);
	}

	static searchFreebie(request: CartSearchFreebieRequest): Promise<CartSearchFreebieResponse> {
		return NetworkService.ajax("GET", "/cart-page/search-freebie", {}, request);
	}

}