import {
	ListNavResponse,
	ListNavBrandResponse,
	MobileSearchProductResponse,
	MobileSearchProductRequest,
	SearchSuggestionResponse,
	SearchSuggestionRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class SearchPageWebService {

	static search(request: MobileSearchProductRequest): Promise<MobileSearchProductResponse> {
		return NetworkService.ajax("PUT", "/search-page/search", {}, request);
	}

	static suggest(request: SearchSuggestionRequest): Promise<SearchSuggestionResponse> {
		return NetworkService.ajax("GET", "/search-page/search/suggestion", {}, request);
	}

}