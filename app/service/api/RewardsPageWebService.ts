import {
	GetPointResponse,
	SearchPointHistoriesResponse,
	SearchPointHistoriesRequest,
	RedeemPointResponse,
	RedeemPointRequest,
	GetReferralResponse,
	SearchReferralActivityResponse,
	SearchReferralActivityRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class RewardsPageWebService {

	static getPoint(): Promise<GetPointResponse> {
		return NetworkService.ajax("GET", "/rewards-page/point", {}, null);
	}

	static searchHistories(request: SearchPointHistoriesRequest): Promise<SearchPointHistoriesResponse> {
		return NetworkService.ajax("GET", "/rewards-page/point/histories", {}, request);
	}

	static redeemPoint(request: RedeemPointRequest): Promise<RedeemPointResponse> {
		return NetworkService.ajax("POST", "/rewards-page/point/redeem", {}, request);
	}

	static getReferral(): Promise<GetReferralResponse> {
		return NetworkService.ajax("GET", "/rewards-page/referral", {}, null);
	}

	static searchReferralActivity(request: SearchReferralActivityRequest): Promise<SearchReferralActivityResponse> {
		return NetworkService.ajax("GET", "/rewards-page/referral/activity", {}, request);
	}

}