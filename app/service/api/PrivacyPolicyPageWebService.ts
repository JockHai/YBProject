import {
	GetPrivacyPolicyResponse,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class PrivacyPolicyPageWebService {

	static get(): Promise<GetPrivacyPolicyResponse> {
		return NetworkService.ajax("GET", "/privacy-policy-page/privacy-policy", {}, null);
	}

}