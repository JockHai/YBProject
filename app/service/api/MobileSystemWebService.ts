import {
	RefreshFirebaseMessagingTokenRequest,
	CreatePerformanceAnalysisRequest,
	ReplaceSessionResponse,
	ReplaceSessionRequest,
	CheckVersionResponse,
	CheckVersionRequest,
	CreateAppUpgradeEventRequest,
} from "../type/api";
import { NetworkService } from "../NetworkService"

export class MobileSystemWebService {

	static refreshFirebaseToken(request: RefreshFirebaseMessagingTokenRequest): Promise<void> {
		return NetworkService.ajax("PUT", "/mobile-system/firebase-messaging-token", {}, request);
	}

	static createPerformanceAnalysis(request: CreatePerformanceAnalysisRequest): Promise<void> {
		return NetworkService.ajax("POST", "/mobile-system/performance-analysis", {}, request);
	}

	static replaceSession(request: ReplaceSessionRequest): Promise<ReplaceSessionResponse> {
		return NetworkService.ajax("PUT", "/mobile-system/session", {}, request);
	}

	static checkVersion(request: CheckVersionRequest): Promise<CheckVersionResponse> {
		return NetworkService.ajax("GET", "/mobile-system/version", {}, request);
	}

	static createUpgradeEvent(request: CreateAppUpgradeEventRequest): Promise<void> {
		return NetworkService.ajax("POST", "/mobile-system/version/upgrade-event", {}, request);
	}

}