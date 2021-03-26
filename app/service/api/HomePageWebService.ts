import {
	SearchAnnouncementResponse,
	SearchAnnouncementRequest,
	CheckAppReviewResponse,
	CreateAppEventRequest,
	HomePageResponse,
	HomePageRequest,
	HomeProductResponseV2,
	HomePageResponseV2,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class HomePageWebService {

	static searchAnnouncement(request: SearchAnnouncementRequest): Promise<SearchAnnouncementResponse> {
		return NetworkService.ajax("GET", "/home-page/announcement", {}, request);
	}

	static createEvent(request: CreateAppEventRequest): Promise<void> {
		return NetworkService.ajax("POST", "/home-page/app-review/event", {}, request);
	}

	static home(request: HomePageRequest): Promise<HomePageResponse> {
		return NetworkService.ajax("GET", "/home-page/home", {}, request);
	}

	static homeProductV2(request: HomePageRequest): Promise<HomeProductResponseV2> {
		return NetworkService.ajax("GET", "/home-page/home-product-v2", {}, request);
	}

}