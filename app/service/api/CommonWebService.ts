import {
	GetAddressResponse,
	GetAnimationSettingResponse,
	CheckMeltingResponse,
	CheckMeltingRequest,
	AddToCartResponse,
	AddToCartRequest,
	TotalCartItemResponse,
	GetMobileContactBarResponse,
	AddFaveProductRequest,
	BatchCheckFaveProductResponse,
	BatchCheckFaveProductRequest,
	GetNumberOfUnreadResponse,
	ReadMessageRequest,
	CreateStockNotificationRequest,
	GetZipCodeResponse,
	CheckZipCodeResponse,
	CheckZipCodeRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class CommonWebService {

	static getAddress(): Promise<GetAddressResponse> {
		return NetworkService.ajax("GET", "/common/address", {}, null);
	}

	static getAnimationSetting(): Promise<GetAnimationSettingResponse> {
		return NetworkService.ajax("GET", "/common/animation-setting", {}, null);
	}

	static checkMelting(request: CheckMeltingRequest): Promise<CheckMeltingResponse> {
		return NetworkService.ajax("GET", "/common/cart/check-melting", {}, request);
	}

	static addToCart(request: AddToCartRequest): Promise<AddToCartResponse> {
		return NetworkService.ajax("POST", "/common/cart/item", {}, request);
	}

	static cartItemTotal(): Promise<TotalCartItemResponse> {
		return NetworkService.ajax("GET", "/common/cart/item/total", {}, null);
	}

	static getContactBar(): Promise<GetMobileContactBarResponse> {
		return NetworkService.ajax("GET", "/common/contact-bar", {}, null);
	}

	static addFavorite(code: string,sku: string,request: AddFaveProductRequest): Promise<void> {
		return NetworkService.ajax("POST", "/common/favorite-product/:code/sku/:sku", { code, sku }, request);
	}

	static removeFavorite(code: string,sku: string): Promise<void> {
		return NetworkService.ajax("DELETE", "/common/favorite-product/:code/sku/:sku", { code, sku }, null);
	}

	static batchCheckFavorite(request: BatchCheckFaveProductRequest): Promise<BatchCheckFaveProductResponse> {
		return NetworkService.ajax("PUT", "/common/favorite-product/batch-check", {}, request);
	}

	static getNumberOfUnread(): Promise<GetNumberOfUnreadResponse> {
		return NetworkService.ajax("GET", "/common/message/number-of-unread", {}, null);
	}

	static readMessage(request: ReadMessageRequest): Promise<void> {
		return NetworkService.ajax("PUT", "/common/message/read", {}, request);
	}

	static createStockNotification(request: CreateStockNotificationRequest): Promise<void> {
		return NetworkService.ajax("POST", "/common/stock-notification", {}, request);
	}

	static getZipCode(): Promise<GetZipCodeResponse> {
		return NetworkService.ajax("GET", "/common/zip-code", {}, null);
	}

	static checkZipCode(request: CheckZipCodeRequest): Promise<CheckZipCodeResponse> {
		return NetworkService.ajax("PUT", "/common/zip-code/check", {}, request);
	}

}