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

	static checkMelting(request: CheckMeltingRequest): Promise<CheckMeltingResponse> {
		return NetworkService.ajax("GET", "/common/cart/check-melting", {}, request);
	}

	static addToCart(request: AddToCartRequest): Promise<AddToCartResponse> {
		return NetworkService.ajax("POST", "/common/cart/item", {}, request);
	}

	static addFavorite(code: string,sku: string,request: AddFaveProductRequest): Promise<void> {
		return NetworkService.ajax("POST", "/common/favorite-product/:code/sku/:sku", { code, sku }, request);
	}

	static batchCheckFavorite(request: BatchCheckFaveProductRequest): Promise<BatchCheckFaveProductResponse> {
		return NetworkService.ajax("PUT", "/common/favorite-product/batch-check", {}, request);
	}

	static readMessage(request: ReadMessageRequest): Promise<void> {
		return NetworkService.ajax("PUT", "/common/message/read", {}, request);
	}

	static createStockNotification(request: CreateStockNotificationRequest): Promise<void> {
		return NetworkService.ajax("POST", "/common/stock-notification", {}, request);
	}

	static checkZipCode(request: CheckZipCodeRequest): Promise<CheckZipCodeResponse> {
		return NetworkService.ajax("PUT", "/common/zip-code/check", {}, request);
	}

}