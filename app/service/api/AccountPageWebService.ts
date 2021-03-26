import {
	MobileLoginCustomerResponse,
	MobileLoginCustomerRequest,
	CustomerProfileView,
	UpdateCustomerProfileRequest,
	UpdateBirthDateResponse,
	UpdateBirthDateRequest,
	MobileRegisterCustomerResponse,
	MobileRegisterCustomerRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class AccountPageWebService {

	static login(request: MobileLoginCustomerRequest): Promise<MobileLoginCustomerResponse> {
		return NetworkService.ajax("POST", "/account-page/customer/login", {}, request);
	}

	static updateProfile(request: UpdateCustomerProfileRequest): Promise<CustomerProfileView> {
		return NetworkService.ajax("PUT", "/account-page/customer/profile", {}, request);
	}

	static updateBirthDate(request: UpdateBirthDateRequest): Promise<UpdateBirthDateResponse> {
		return NetworkService.ajax("PUT", "/account-page/customer/profile/update-birth-date", {}, request);
	}

	static register(request: MobileRegisterCustomerRequest): Promise<MobileRegisterCustomerResponse> {
		return NetworkService.ajax("POST", "/account-page/customer/register", {}, request);
	}

}