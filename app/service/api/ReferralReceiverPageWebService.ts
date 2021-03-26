import {
	GetReferralReceiverResponse,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class ReferralReceiverPageWebService {

	static get(): Promise<GetReferralReceiverResponse> {
		return NetworkService.ajax("GET", "/referral-receiver-page/referral/receiver", {}, null);
	}

}