import {
	PDPResponse,
	PDPRequest,
	SearchReviewResponse,
	SearchReviewRequest,
	CreateReviewRequest,
	SearchReviewResponseV2,
	SearchReviewRequestV2,
	CreateReviewRequestV2,
	ProductCheckResponse,
	ProductCheckRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class PDPWebService {

	static pdp(code: string,request: PDPRequest): Promise<PDPResponse> {
		return NetworkService.ajax("GET", "/pdp/product/:code", { code }, request);
	}

	static searchProductReview(code: string,request: SearchReviewRequest): Promise<SearchReviewResponse> {
		return NetworkService.ajax("GET", "/pdp/product/:code/review", { code }, request);
	}

	static createProductReview(code: string,request: CreateReviewRequest): Promise<void> {
		return NetworkService.ajax("POST", "/pdp/product/:code/review", { code }, request);
	}

	static searchProductReviewV2(code: string,request: SearchReviewRequestV2): Promise<SearchReviewResponseV2> {
		return NetworkService.ajax("GET", "/pdp/product/:code/review-v2", { code }, request);
	}

	static createProductReviewV2(code: string,request: CreateReviewRequestV2): Promise<void> {
		return NetworkService.ajax("POST", "/pdp/product/:code/review-v2", { code }, request);
	}

	static check(request: ProductCheckRequest): Promise<ProductCheckResponse> {
		return NetworkService.ajax("GET", "/pdp/product/check", {}, request);
	}

}