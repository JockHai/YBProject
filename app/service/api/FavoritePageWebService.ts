import {
	SearchFavoriteProductResponse,
	SearchFavoriteProductRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class FavoritePageWebService {

	static search(request: SearchFavoriteProductRequest): Promise<SearchFavoriteProductResponse> {
		return NetworkService.ajax("PUT", "/favorite-page/favorite-product", {}, request);
	}

}