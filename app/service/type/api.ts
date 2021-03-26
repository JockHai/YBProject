/// YummyBazaar Interface Models


/// Response Models Infos

export interface AddToCartResponse {
	success: boolean;
	warning_message: string | null;
}

export interface BatchAddCartItemResponse {
	success: boolean;
	warning_message: string | null;
}

export interface BatchCheckFaveProductResponse {
	products: BatchCheckFaveProductResponse$Product[];
}

export interface CartSearchFreebieResponse {
	freebie_limitation: number | null;
	freebies: CartSearchFreebieResponse$Freebie[] | null;
}

export interface CheckAppReviewResponse {
	pop_up: boolean;
}

export interface CheckCheckoutResponse {
	active_items: CheckCheckoutResponse$ActiveItem[] | null;
	response_type: CheckCheckoutResponse$StatusCode | null;
	warning_message: string | null;
}

export interface CheckMeltingResponse {
	will_melting: boolean;
}

export interface CheckVersionResponse {
	latest_release_note: string;
	latest_url: string;
	latest_version: string;
	must_update: boolean;
	updated: boolean;
}

export interface CheckZipCodeResponse {
	warning_message: string | null;
}

export interface CreateShippingAddressResponse {
	success: boolean;
	warning_message: string | null;
}

export interface CustomerProfileView {
	avatar_image_url: string | null;
	birth_date_est: string | null;
	email: string;
	enable_update_birth_date: boolean | null;
	first_name: string | null;
	intercom_user_hash: string | null;
	last_name: string | null;
	phone: string | null;
}

export interface GetAddressResponse {
	addresses: GetAddressResponse$Address[] | null;
}

export interface GetAnimationSettingResponse {
	animation_setting: GetAnimationSettingResponse$AnimationSetting;
}

export interface GetCartResponse {
	free_shipping_threshold: number;
	freebies: CartItemView[];
	global_shipping_protection_enable: boolean;
	items: CartItemView[];
	ordered_products: GetCartResponse$OrderedProduct[] | null;
	shipping_fee: number;
	shipping_protection_enable: boolean;
	shipping_protection_price: number | null;
	tooltip_info: string;
	total_item_price: number;
	total_item_quantity: number;
	total_price: number;
	until_free_shipping: number;
	warning_message: string | null;
}

export interface GetMessageSettingResponse {
	marketing_notification: boolean;
}

export interface GetMobileContactBarResponse {
	chat_info: string;
	email: string;
	phone: string;
}

export interface GetNumberOfUnreadResponse {
	number_of_unread: number;
}

export interface GetOrderDetailResponse {
	billing_details: GetOrderDetailResponse$BillingDetailsView | null;
	order_date: string | null;
	order_id: string;
	order_items: GetOrderDetailResponse$OrderItemView[] | null;
	order_number: string;
	order_status: string;
	order_summary: GetOrderDetailResponse$OrderSummaryView | null;
	promotions: GetOrderDetailResponse$PromotionView[] | null;
	shipments: GetOrderDetailResponse$ShipmentView[] | null;
	shipping_info: GetOrderDetailResponse$ShippingInfoView | null;
	unshipped_items: GetOrderDetailResponse$UnshippedItemView[] | null;
}

export interface GetPointResponse {
	logged_in_data: GetPointResponse$LoggedInData | null;
	not_logged_in_data: GetPointResponse$NotLoggedInData | null;
}

export interface GetPrivacyPolicyResponse {
	content: string;
}

export interface GetReferralReceiverResponse {
	descr_down: string | null;
	descr_down_background_image_url: string | null;
	descr_up: string | null;
	icon_url: string | null;
	title: string | null;
}

export interface GetReferralResponse {
	logged_in_data: GetReferralResponse$LoggedInData | null;
	not_logged_in_data: GetReferralResponse$NotLoggedInData | null;
}

export interface GetReorderResponse {
	reorder_items: GetReorderResponse$Item[];
}

export interface GetTermOfUseResponse {
	content: string;
}

export interface GetZipCodeResponse {
	zip_code: string;
}

export interface HomePageResponse {
	logged_in_data: HomePageResponse$LoggedInData | null;
	not_logged_in_data: HomePageResponse$NotLoggedInData | null;
}

export interface HomePageResponseV2 {
	logged_in_data: HomePageResponseV2$LoggedInData | null;
	not_logged_in_data: HomePageResponseV2$NotLoggedInData | null;
}

export interface HomeProductResponseV2 {
	logged_in_data: HomeProductResponseV2$LoggedInData | null;
	not_logged_in_data: HomeProductResponseV2$NotLoggedInData | null;
}

export interface ListFAQResponse {
	faqs: ListFAQResponse$FAQ[];
}

export interface ListNavBrandResponse {
	nav_brands: ListNavBrandResponse$NavBrand[];
}

export interface ListNavResponse {
	navs: ListNavResponse$Nav[];
}

export interface ListStateResponse {
	states: ListStateResponse$State[];
}

export interface MobileLoginCustomerResponse {
	avatar_image_url: string | null;
	birth_date_est: string | null;
	email: string | null;
	enable_update_birth_date: boolean | null;
	first_name: string | null;
	intercom_user_hash: string | null;
	last_name: string | null;
	phone: string | null;
	success: boolean;
	warning_message: string | null;
}

export interface MobileRegisterCustomerResponse {
	email: string | null;
	enable_update_birth_date: boolean | null;
	intercom_user_hash: string | null;
	success: boolean;
	warning_message: string | null;
}

export interface MobileSearchOrderResponse {
	orders: MobileSearchOrderResponse$Order[];
	page_index: number;
	total_page: number;
}

export interface MobileSearchProductResponse {
	action_url: string | null;
	brands: MobileSearchProductResponse$TermFilter[] | null;
	diets: MobileSearchProductResponse$TermFilter[] | null;
	max_price: number | null;
	max_price_in_result: number | null;
	min_price: number | null;
	min_price_in_result: number | null;
	navs: MobileSearchProductResponse$NavFilter[] | null;
	page_index: number | null;
	prior_filters: string | null;
	prior_navs: MobileSearchProductResponse$PriorNav[] | null;
	products: SimpleProductView[] | null;
	query: string | null;
	regions: MobileSearchProductResponse$TermFilter[] | null;
	sort_by: SortByView | null;
	sort_options: MobileSearchProductResponse$SortOption[] | null;
	total_page: number | null;
	upper_navs: MobileSearchProductResponse$UpperNav[] | null;
}

export interface PDPResponse {
	california_warning: CaliforniaWarningView | null;
	disclaimer: string | null;
	estimate_delivery_date_result: PDPResponse$EstimateDeliveryDateResult | null;
	ineligible_zone_check_result: PDPResponse$IneligibleZoneCheckResult | null;
	product_detail: PDPResponse$ProductDetail;
	recently_viewed_products: SimpleProductView[] | null;
	similar_brand_product_action_url: string | null;
	similar_brand_products: SimpleProductView[] | null;
}

export interface ProductCheckResponse {
	california_warning: CaliforniaWarningView | null;
	estimated_delivery_message: string | null;
	warning_message: string | null;
}

export interface RedeemPointResponse {
	available_rewards: number | null;
	coupon_code: string | null;
	success: boolean;
	total_points: number | null;
	warning_message: string | null;
}

export interface ReplaceSessionResponse {
	session_token: string;
}

export interface SearchAnnouncementResponse {
	announcements: SearchAnnouncementResponse$Announcement[];
}

export interface SearchCustomerMessageResponse {
	messages: SearchCustomerMessageResponse$Message[];
	page_index: number;
	total_page: number;
}

export interface SearchFavoriteProductResponse {
	navs: SearchFavoriteProductResponse$Nav[] | null;
	page_index: number;
	products: SearchFavoriteProductResponse$SimpleProduct[];
	total_page: number;
}

export interface SearchFreebieResponse {
	freebie_limitation: number;
	freebies: SearchFreebieResponse$Freebie[];
	page_index: number;
	total_page: number;
}

export interface SearchOrderedProductResponse {
	navs: SearchOrderedProductResponse$Nav[] | null;
	page_index: number;
	products: SimpleProductView[];
	total_page: number;
}

export interface SearchPointHistoriesResponse {
	histories: PointHistoryView[];
	page_index: number;
	total_page: number;
}

export interface SearchReferralActivityResponse {
	page_index: number;
	referrals: SearchReferralActivityResponse$Referral[];
	total_completed: number;
	total_page: number;
}

export interface SearchReviewResponse {
	page_index: number;
	reviews: ReviewView[];
	total_page: number;
}

export interface SearchReviewResponseV2 {
	page_index: number;
	reviews: ReviewViewV2[];
	total_page: number;
}

export interface SearchShippingAddressesResponse {
	page_index: number;
	shipping_addresses: ShippingAddressView[];
	total_page: number;
}

export interface SearchSuggestionResponse {
	brands: SearchSuggestionResponse$Brand[] | null;
	global_suggestions: SearchSuggestionResponse$Suggestion[] | null;
	hidden_suggestions: SearchSuggestionResponse$HiddenSuggestion[] | null;
	navs: SearchSuggestionResponse$Nav[] | null;
	query_histories: SearchSuggestionResponse$Suggestion[] | null;
	regions: SearchSuggestionResponse$Region[] | null;
	suggestions: SearchSuggestionResponse$Suggestion[] | null;
	trending_searches: SearchSuggestionResponse$Suggestion[] | null;
}

export interface TotalCartItemResponse {
	total: number;
}

export interface UpdateBirthDateResponse {
	enable_update_birth_date: boolean | null;
	success: boolean;
	warning_message: string | null;
}

export interface UpdateCartItemResponse {
	success: boolean;
	warning_message: string | null;
}

export interface UpdateShippingAddressResponse {
	success: boolean;
	warning_message: string | null;
}



/// Request Models Infos

export interface AddFaveProductRequest {
	source_module: string | null;
	source_page: string;
}

export interface AddToCartRequest {
	product_code: string;
	quantity: number;
	sku: string;
	source_module: string | null;
	source_page: string;
}

export interface BatchAddCartItemRequest {
	items: BatchAddCartItemRequest$Item[];
	source_module: string | null;
	source_page: string;
}

export interface BatchCheckFaveProductRequest {
	products: BatchCheckFaveProductRequest$Product[];
}

export interface CartSearchFreebieRequest {
	zip_code: string | null;
}

export interface CheckCheckoutRequest {
	items: CheckCheckoutRequest$Item[];
	shipping_protection_enable: boolean;
	zip_code: string | null;
}

export interface CheckMeltingRequest {
	zip_code: string | null;
}

export interface CheckVersionRequest {
	client_version: string;
}

export interface CheckZipCodeRequest {
	has_selected_address: boolean;
	zip_code: string | null;
}

export interface CreateAppEventRequest {
	action: CreateAppEventRequest$Action;
	comment_text: string | null;
}

export interface CreateAppUpgradeEventRequest {
	action: CreateAppUpgradeEventRequest$Action;
	client_version: string;
}

export interface CreatePerformanceAnalysisRequest {
	statistics: CreatePerformanceAnalysisRequest$Statistic[] | null;
}

export interface CreateReviewRequest {
	content: string;
	score: number;
	title: string;
}

export interface CreateReviewRequestV2 {
	content: string;
	rating: number;
	title: string;
}

export interface CreateShippingAddressRequest {
	address1: string | null;
	address2: string | null;
	city: string | null;
	company: string | null;
	default_address: boolean | null;
	first_name: string | null;
	last_name: string | null;
	phone: string | null;
	state: string | null;
	state_code: string | null;
	zip_code: string | null;
}

export interface CreateStockNotificationRequest {
	product_code: string;
	sku: string;
}

export interface GetCartRequest {
	zip_code: string | null;
}

export interface GetReorderRequest {
	zip_code: string | null;
}

export interface HomePageRequest {
	zip_code: string | null;
}

export interface MobileLoginCustomerRequest {
	email: string;
	shopify_customer_id: string;
}

export interface MobileRegisterCustomerRequest {
	advocate_referral_code: string | null;
	email: string;
	shopify_customer_id: string;
}

export interface MobileSearchOrderRequest {
	page_index: number;
	page_size: number | null;
}

export interface MobileSearchProductRequest {
	brands: string[] | null;
	diets: string[] | null;
	max_price: number | null;
	min_price: number | null;
	navs: string[] | null;
	page_index: number;
	page_size: number | null;
	prior_filters: string | null;
	query: string | null;
	regions: string[] | null;
	sort_by: SortByView | null;
	zip_code: string | null;
}

export interface PDPRequest {
	zip_code: string | null;
}

export interface ProductCheckRequest {
	zip_code: string;
}

export interface ReadMessageRequest {
	action: ReadMessageRequest$Action;
	message_id: string;
}

export interface RedeemPointRequest {
	redemption_rule_id: string;
}

export interface RefreshFirebaseMessagingTokenRequest {
	firebase_messaging_token: string;
}

export interface RemoveCartItemRequest {
	product_code: string;
	sku: string;
}

export interface ReplaceSessionRequest {
	app_version: string;
	cpu: string | null;
	device_id: string;
	firebase_messaging_token: string | null;
	language: string | null;
	mac_address: string | null;
	manufacturer: string | null;
	model_name: string | null;
	os: ReplaceSessionRequest$OS;
	os_version: string;
	session_token: string | null;
}

export interface SaveCartSettingRequest {
	shipping_protection_enable: boolean;
}

export interface SearchAnnouncementRequest {
	first_launch: boolean;
	platform: SearchAnnouncementRequest$Platform;
}

export interface SearchCustomerMessageRequest {
	page_index: number;
	page_size: number | null;
}

export interface SearchFavoriteProductRequest {
	nav_ids: string[] | null;
	page_index: number;
	page_size: number | null;
	zip_code: string | null;
}

export interface SearchFreebieRequest {
	page_index: number;
	page_size: number | null;
	zip_code: string | null;
}

export interface SearchOrderedProductRequest {
	nav_ids: string[] | null;
	page_index: number;
	page_size: number | null;
	zip_code: string | null;
}

export interface SearchPointHistoriesRequest {
	page_index: number;
	page_size: number | null;
}

export interface SearchReferralActivityRequest {
	page_index: number;
	page_size: number | null;
}

export interface SearchReviewRequest {
	page_index: number;
	page_size: number | null;
}

export interface SearchReviewRequestV2 {
	page_index: number;
	page_size: number;
}

export interface SearchShippingAddressesRequest {
	page_index: number;
	page_size: number | null;
}

export interface SearchSuggestionRequest {
	query: string | null;
}

export interface UpdateBirthDateRequest {
	birth_date_est: string;
}

export interface UpdateCartItemRequest {
	product_code: string;
	quantity: number;
	sku: string;
}

export interface UpdateCustomerProfileRequest {
	avatar_content_type: string | null;
	avatar_image_base64: string | null;
	first_name: string | null;
	last_name: string | null;
	phone: string | null;
}

export interface UpdateMessageSettingRequest {
	marketing_notification: boolean;
}

export interface UpdateShippingAddressRequest {
	address1: string | null;
	address2: string | null;
	city: string | null;
	company: string | null;
	country: string | null;
	country_code: string | null;
	default_address: boolean | null;
	first_name: string | null;
	last_name: string | null;
	phone: string | null;
	state: string | null;
	state_code: string | null;
	zip_code: string | null;
}



/// Others Models Infos

export enum CheckCheckoutResponse$StatusCode {
	ALL_FAILED = "ALL_FAILURE",
	FREEBIE_EXCEED_LIMIT = "FREEBIE_EXCEED_LIMIT",
	PARTIAL_FAILURE = "PARTIAL_FAILURE",
	SUCCESS = "SUCCESS",
}

export enum CreateAppEventRequest$Action {
	COMMENT = "COMMENT",
	IGNORE = "IGNORE",
	REVIEW = "REVIEW",
}

export enum CreateAppUpgradeEventRequest$Action {
	APP_IGNORE = "APP_IGNORE",
	CUSTOMER_IGNORE = "CUSTOMER_IGNORE",
	FORCED_UPGRADE = "FORCED_UPGRADE",
	INITIATIVE_UPGRADE = "INITIATIVE_UPGRADE",
}

export enum CustomerPointHistoryActionType {
	ADJUST = "ADJUST",
	BIRTHDAY = "BIRTHDAY",
	EXPIRATION = "EXPIRATION",
	INIT = "INIT",
	MEAL_PLANNING = "MEAL_PLANNING",
	M_REDEEM = "M_REDEEM",
	ORDER_CANCEL = "ORDER_CANCEL",
	ORDER_PAID = "ORDER_PAID",
	ORDER_REFUND = "ORDER_REFUND",
	PLACE_NTH_ORDER = "PLACE_NTH_ORDER",
	REDEEM = "REDEEM",
	REFERRAL = "REFERRAL",
	REFERRAL_SIGN_UP = "REFERRAL_SIGN_UP",
	SIGN_UP = "SIGN_UP",
}

export enum GetPointResponse$EarningRewardCardActionType {
	BIRTHDAY = "BIRTHDAY",
	DONE = "DONE",
	REFER = "REFER",
	SHOP = "SHOP",
}

export enum GetPointResponse$RedemptionRewardCardActionType {
	DISABLE = "DISABLE",
	REDEEM = "REDEEM",
	SHOP = "SHOP",
}

export enum MobileOrderStatusView {
	CANCELLED = "CANCELLED",
	DELIVERED = "DELIVERED",
	PARTIAL_REFUND = "PARTIAL_REFUNDED",
	PROCESSING = "PROCESSING",
	REFUND = "REFUNDED",
	SHIPPED = "SHIPPED",
}

export enum MobileProductTypeView {
	BUNDLE = "BUNDLE",
	BYOG = "BYOG",
	FREEBIE = "FREEBIE",
	GENERAL = "GENERAL",
	GIFT_BOX = "GIFT_BOX",
	GIFT_CARD = "GIFT_CARD",
	SUBSCRIPTION = "SUBSCRIPTION",
	YB_PROTECTION = "YB_PROTECTION",
	YB_TEST = "YB_TEST",
}

export enum OrderView$OrderStatusView {
	CANCELLED = "CANCELLED",
	DELIVERED = "DELIVERED",
	PARTIAL_REFUND = "PARTIAL_REFUNDED",
	PROCESSING = "PROCESSING",
	REFUND = "REFUNDED",
	SHIPPED = "SHIPPED",
}

export enum ProductStatusView {
	AVAILABLE = "AVAILABLE",
	DELETED = "DELETED",
	OUT_OF_STOCK = "OUT_OF_STOCK",
	UNAVAILABLE = "UNAVAILABLE",
	VIEW_MORE = "VIEW_MORE",
}

export enum ReadMessageRequest$Action {
	OPEN_NOTIFICATION = "OPEN_NOTIFICATION",
	READ_MESSAGE = "READ_MESSAGE",
}

export enum ReplaceSessionRequest$OS {
	ANDROID = "ANDROID",
	IOS = "IOS",
}

export enum SearchAnnouncementRequest$Platform {
	ANDROID = "ANDROID",
	IOS = "IOS",
}

export enum SearchReferralActivityResponse$Status {
	BLOCKED = "BLOCKED",
	CANCELLED = "CANCELLED",
	COMPLETED = "COMPLETED",
	PENDING = "PENDING",
}

export enum SortByView {
	A_Z = "A_Z",
	FEATURED = "FEATURED",
	NEWEST = "NEWEST",
	OLDEST = "OLDEST",
	PRICE_ASC = "PRICE_ASC",
	PRICE_DESC = "PRICE_DESC",
	Z_A = "Z_A",
}

export interface AJAXErrorResponse {
	errorCode: string | null;
	id: string | null;
	message: string | null;
}

export interface Banner {
	action_url: string | null;
	descr: string | null;
	image_url: string | null;
	title: string | null;
}

export interface BatchAddCartItemRequest$Item {
	product_code: string;
	quantity: number;
	sku: string;
}

export interface BatchCheckFaveProductRequest$Product {
	code: string;
	sku: string;
}

export interface BatchCheckFaveProductResponse$Product {
	favorite: boolean;
	product_code: string;
	sku: string;
}

export interface Brand {
	action_url: string | null;
	image_url: string | null;
	name: string | null;
}

export interface CaliforniaWarningView {
	california_warning_detail: string | null;
	redirect_content_display: string | null;
	redirect_content_url: string | null;
}

export interface CartItemView {
	flavor: string | null;
	image_url: string | null;
	max_order_quantity: number | null;
	name: string | null;
	option: string | null;
	price: number | null;
	product_code: string | null;
	product_type: MobileProductTypeView | null;
	quantity: number | null;
	shopify_graphql_api_id: string | null;
	size: string | null;
	sku: string | null;
	status: ProductStatusView;
	unit_price: number | null;
}

export interface CartSearchFreebieResponse$Freebie {
	brand: string | null;
	flavor: string | null;
	image_url: string | null;
	in_stock: boolean | null;
	name: string | null;
	product_code: string | null;
	region: string | null;
	shopify_graphql_api_id: string | null;
	size: string | null;
	sku: string | null;
}

export interface CheckCheckoutRequest$Item {
	product_code: string;
	quantity: number;
	sku: string;
}

export interface CheckCheckoutResponse$ActiveItem {
	product_code: string;
	quantity: number;
	shopify_graphql_api_id: string;
	sku: string;
}

export interface CreatePerformanceAnalysisRequest$Statistic {
	elapsed_time: number | null;
	http_status: number | null;
	method: string | null;
	page: string | null;
	path: string | null;
	type: string | null;
}

export interface DietView {
	image_url: string | null;
	name: string | null;
}

export interface GetAddressResponse$Address {
	address1: string | null;
	address2: string | null;
	city: string | null;
	company: string | null;
	country: string | null;
	country_code: string | null;
	default_address: boolean | null;
	first_name: string | null;
	id: string | null;
	last_name: string | null;
	phone: string | null;
	state: string | null;
	state_code: string | null;
	zip_code: string | null;
}

export interface GetAnimationSettingResponse$AnimationSetting {
	image_urls: string[];
	show_animation: boolean;
}

export interface GetCartResponse$OrderedProduct {
	brand: string | null;
	buy_limit_qty: number | null;
	code: string | null;
	flavor: string | null;
	image_url: string | null;
	msrp: number | null;
	name: string | null;
	need_check_will_melting: boolean;
	new_product: boolean | null;
	price: number | null;
	qty: number | null;
	region: string | null;
	review_rating_v2: number | null;
	review_ratings: number | null;
	size: string | null;
	sku: string | null;
	status: ProductStatusView;
	weight: string | null;
}

export interface GetOrderDetailResponse$BillingDetailsView {
	address1: string | null;
	address2: string | null;
	city: string | null;
	credit_card_expire_date: string | null;
	credit_card_last_four_digits: string | null;
	credit_card_type: string | null;
	first_name: string | null;
	last_name: string | null;
	state: string | null;
	zip_code: string | null;
}

export interface GetOrderDetailResponse$OrderItemView {
	brand: string | null;
	category_id: string | null;
	gift_card: boolean | null;
	image_url: string | null;
	item_flavor: string | null;
	item_option: string | null;
	item_size: string | null;
	price: string | null;
	product_code: string | null;
	product_name: string | null;
	product_type: MobileProductTypeView | null;
	quantity: number | null;
	region: string | null;
	sku: string | null;
	subtotal: string | null;
	total: string | null;
}

export interface GetOrderDetailResponse$OrderSummaryView {
	discount: string | null;
	order_total: string | null;
	shipping_cost: string | null;
	subtotal: string | null;
	taxes: string | null;
}

export interface GetOrderDetailResponse$PromotionView {
	code: string | null;
	discount: string | null;
	name: string | null;
}

export interface GetOrderDetailResponse$ShipmentItemView {
	brand: string | null;
	flavor: string | null;
	image_url: string | null;
	option: string | null;
	order_item_id: string | null;
	price: string | null;
	product_code: string | null;
	product_name: string | null;
	product_type: MobileProductTypeView | null;
	quantity: number | null;
	region: string | null;
	size: string | null;
	sku: string | null;
	total: string | null;
	weight: string | null;
}

export interface GetOrderDetailResponse$ShipmentView {
	delivery_date: string | null;
	estimated_delivery_date: string | null;
	order_number: string | null;
	ship_date: string | null;
	shipment_id: string | null;
	shipment_items: GetOrderDetailResponse$ShipmentItemView[] | null;
	status: MobileOrderStatusView | null;
	tracking_number: string | null;
	tracking_url: string | null;
}

export interface GetOrderDetailResponse$ShippingInfoView {
	address1: string | null;
	address2: string | null;
	city: string | null;
	first_name: string | null;
	last_name: string | null;
	state: string | null;
	zip_code: string | null;
}

export interface GetOrderDetailResponse$UnshippedItemView {
	brand: string | null;
	category_id: string | null;
	gift_card: boolean | null;
	image_url: string | null;
	item_flavor: string | null;
	item_option: string | null;
	item_size: string | null;
	price: string | null;
	product_code: string | null;
	product_name: string | null;
	product_type: MobileProductTypeView | null;
	quantity: number | null;
	region: string | null;
	sku: string | null;
	subtotal: string | null;
	total: string | null;
}

export interface GetPointResponse$EarningRewardCard {
	action_text: string | null;
	action_type: GetPointResponse$EarningRewardCardActionType | null;
	descr: string | null;
	icon_url: string | null;
	image_url: string | null;
	name: string | null;
	points: number | null;
	subtitle: string | null;
}

export interface GetPointResponse$FAQ {
	answer: string | null;
	question: string | null;
}

export interface GetPointResponse$LoggedInData {
	background_image_url: string | null;
	banner_image_url: string | null;
	earning_reward_cards: GetPointResponse$EarningRewardCard[];
	faqs: GetPointResponse$FAQ[];
	point_histories: PointHistoryView[] | null;
	point_summary: GetPointResponse$PointSummary;
	redemption_reward_cards: GetPointResponse$RedemptionRewardCard[];
	total_of_point_histories: number | null;
}

export interface GetPointResponse$NotLoggedInData {
	background_image_url: string | null;
	banner_image_url: string | null;
	earning_reward_cards: GetPointResponse$EarningRewardCard[];
	faqs: GetPointResponse$FAQ[];
	redemption_reward_cards: GetPointResponse$RedemptionRewardCard[];
}

export interface GetPointResponse$PointSummary {
	available_rewards: number | null;
	avatar_image_url: string | null;
	need_display_points_expiration_warning: boolean | null;
	pending_points: number | null;
	points_expiration_warning_message: string | null;
	register_info: string | null;
	total_points: number | null;
}

export interface GetPointResponse$RedemptionRewardCard {
	action_text: string | null;
	action_type: GetPointResponse$RedemptionRewardCardActionType | null;
	descr: string | null;
	icon_url: string | null;
	image_url: string | null;
	name: string | null;
	points: number | null;
	rule_id: string | null;
	subtitle: string | null;
}

export interface GetReferralResponse$LoggedInData {
	email_body: string | null;
	email_subject: string | null;
	referral_rule: GetReferralResponse$ReferralRule | null;
	sharing_url: string | null;
}

export interface GetReferralResponse$NotLoggedInData {
	referral_rule: GetReferralResponse$ReferralRule | null;
}

export interface GetReferralResponse$ReferralRule {
	advocate_reward: string | null;
	friend_reward: string | null;
}

export interface GetReorderResponse$Item {
	brand: string | null;
	flavor: string | null;
	image_url: string | null;
	max_order_quantity: number | null;
	name: string | null;
	option: string | null;
	product_code: string | null;
	product_type: MobileProductTypeView | null;
	quantity: number | null;
	region: string | null;
	size: string | null;
	sku: string | null;
	status: ProductStatusView;
	unit_price: number | null;
}

export interface HomePageResponse$LoggedInData {
	available_rewards: number | null;
	favorite_products: SimpleProductView[] | null;
	feature_brands: Brand[] | null;
	last_order: OrderView | null;
	most_viewed_products: SimpleProductView[] | null;
	need_display_points_expiration_warning: boolean;
	new_products: SimpleProductView[] | null;
	points_expiration_warning_message: string | null;
	recently_viewed_products: SimpleProductView[] | null;
	reorder_products: SimpleProductView[] | null;
	reward_background_image_url: string | null;
	static_banners: Banner[];
	top_banners: Banner[];
	top_navs: TopNav[];
	view_all_new_products_action_url: string | null;
}

export interface HomePageResponse$NotLoggedInData {
	feature_brands: Brand[] | null;
	most_viewed_products: SimpleProductView[] | null;
	new_products: SimpleProductView[] | null;
	recently_viewed_products: SimpleProductView[] | null;
	reward_background_image_url: string | null;
	static_banners: Banner[];
	top_banners: Banner[];
	top_navs: TopNav[];
	view_all_new_products_action_url: string | null;
}

export interface HomePageResponseV2$LoggedInData {
	available_rewards: number | null;
	feature_brands: Brand[] | null;
	last_order: OrderView | null;
	need_display_points_expiration_warning: boolean;
	points_expiration_warning_message: string | null;
	reward_background_image_url: string | null;
	static_banners: Banner[];
	top_banners: Banner[];
	top_navs: TopNav[];
	view_all_new_products_action_url: string | null;
}

export interface HomePageResponseV2$NotLoggedInData {
	feature_brands: Brand[] | null;
	reward_background_image_url: string | null;
	static_banners: Banner[];
	top_banners: Banner[];
	top_navs: TopNav[];
	view_all_new_products_action_url: string | null;
}

export interface HomeProductResponseV2$LoggedInData {
	favorite_products: SimpleProductView[] | null;
	most_viewed_products: SimpleProductView[] | null;
	new_products: SimpleProductView[] | null;
	recently_viewed_products: SimpleProductView[] | null;
	reorder_products: SimpleProductView[] | null;
}

export interface HomeProductResponseV2$NotLoggedInData {
	most_viewed_products: SimpleProductView[] | null;
	new_products: SimpleProductView[] | null;
	recently_viewed_products: SimpleProductView[] | null;
}

export interface ListFAQResponse$FAQ {
	answer: string | null;
	question: string | null;
}

export interface ListNavBrandResponse$Brand {
	action_url: string | null;
	name: string | null;
}

export interface ListNavBrandResponse$NavBrand {
	brands: ListNavBrandResponse$Brand[];
	nav: string | null;
}

export interface ListNavResponse$Nav {
	action_text: string | null;
	action_url: string | null;
	name: string | null;
	sub_navs: ListNavResponse$SubNav[] | null;
}

export interface ListNavResponse$SubNav {
	action_url: string | null;
	image_url: string | null;
	name: string | null;
	next_is_leaf_node: boolean | null;
}

export interface ListStateResponse$State {
	state: string | null;
	state_code: string | null;
}

export interface MobileErrorResponse {
	error_code: string | null;
	error_message: string | null;
}

export interface MobileSearchOrderResponse$Order {
	delivery_date: string | null;
	estimated_delivery_date: string | null;
	order_date: string | null;
	order_id: string;
	order_number: string;
	order_status: MobileOrderStatusView | null;
	ship_to: string | null;
	total: string | null;
	tracking_urls: string[] | null;
}

export interface MobileSearchProductResponse$NavFilter {
	name: string | null;
	nav_id: string | null;
	selected: boolean | null;
}

export interface MobileSearchProductResponse$PriorNav {
	action_url: string | null;
	image_url: string | null;
	leaf_node: boolean | null;
	name: string | null;
	nav_id: string | null;
	next_is_leaf_node: boolean | null;
	parent_node: boolean | null;
	selected: boolean | null;
}

export interface MobileSearchProductResponse$SortOption {
	display_name: string | null;
	product_code: string | null;
}

export interface MobileSearchProductResponse$TermFilter {
	name: string | null;
	selected: boolean | null;
}

export interface MobileSearchProductResponse$UpperNav {
	action_url: string | null;
	image_url: string | null;
	leaf_node: boolean | null;
	name: string | null;
	nav_id: string | null;
	selected: boolean | null;
}

export interface OrderView {
	delivery_date: string | null;
	estimated_delivery_date: string | null;
	order_id: string;
	order_number: string;
	order_status: OrderView$OrderStatusView;
}

export interface PDPResponse$EstimateDeliveryDateResult {
	estimated_delivery_message: string | null;
	warning_message: string | null;
	zip_code: string | null;
}

export interface PDPResponse$FlavorOption {
	flavor: string | null;
	image_url: string | null;
	in_stock: boolean | null;
	sizes: PDPResponse$SizeOption[] | null;
	sku: string | null;
}

export interface PDPResponse$IneligibleZoneCheckResult {
	ineligible_zone_warning: string | null;
	is_ineligible_zone: boolean;
}

export interface PDPResponse$Item {
	buy_limit_qty: number | null;
	favorite: boolean | null;
	flavor: string | null;
	image_url: string | null;
	in_stock: boolean | null;
	msrp: number | null;
	need_check_will_melting: boolean;
	option: string | null;
	price: number | null;
	qty: number | null;
	size: string | null;
	sku: string | null;
	weight: string | null;
}

export interface PDPResponse$ProductDetail {
	brand: string | null;
	brand_action_url: string | null;
	category_id: string | null;
	code: string;
	country_image_url: string | null;
	country_of_origin: string | null;
	descr: string | null;
	diets: DietView[] | null;
	enable_review: boolean | null;
	flavor_options: PDPResponse$FlavorOption[] | null;
	image_urls: string[] | null;
	in_stock: boolean | null;
	ineligible_zones: string[] | null;
	ingredient: string | null;
	items: PDPResponse$Item[];
	name: string | null;
	new_product: boolean | null;
	product_type: MobileProductTypeView | null;
	region: string | null;
	region_action_url: string | null;
	region_image_url: string | null;
	review: ProductReviewView | null;
	review_v2: ProductReviewViewV2 | null;
	shipping_info: string | null;
	size_options: PDPResponse$SizeOption[] | null;
}

export interface PDPResponse$SizeOption {
	in_stock: boolean | null;
	size: string | null;
	sku: string | null;
}

export interface PointHistoryView {
	change_points: number | null;
	change_points_descr: string | null;
	created_time: string | null;
	descr: string | null;
	id: string | null;
	left_points: number | null;
	redeem_coupon_code: string | null;
	rule_name: string | null;
	type: CustomerPointHistoryActionType | null;
}

export interface ProductReviewView {
	count: number | null;
	rates: number | null;
	reviews: ReviewView[] | null;
}

export interface ProductReviewViewV2 {
	count: number | null;
	rates: number | null;
	reviews: ReviewViewV2[] | null;
}

export interface ReviewView {
	content: string | null;
	email: string | null;
	id: string | null;
	name: string | null;
	score: number | null;
	title: string | null;
}

export interface ReviewViewV2 {
	content: string;
	email: string;
	id: string;
	images: ReviewViewV2$Image[] | null;
	name: string;
	score: number;
	title: string;
}

export interface ReviewViewV2$Image {
	caption: string | null;
	large: string | null;
	normal: string | null;
	original: string | null;
	position: number;
}

export interface SearchAnnouncementResponse$Announcement {
	action_url: string | null;
	image_url: string | null;
}

export interface SearchCustomerMessageResponse$Message {
	action_url: string | null;
	action_url_title: string | null;
	id: string;
	image_url: string | null;
	read: boolean;
	send_time: string;
	text: string | null;
	title: string | null;
}

export interface SearchFavoriteProductResponse$Nav {
	count: number | null;
	image_url: string | null;
	name: string | null;
	nav_id: string | null;
	selected: boolean | null;
}

export interface SearchFavoriteProductResponse$SimpleProduct {
	brand: string | null;
	buy_limit_qty: number | null;
	code: string;
	flavor: string | null;
	image_url: string | null;
	msrp: number | null;
	name: string | null;
	need_check_will_melting: boolean;
	new_product: boolean | null;
	price: number | null;
	qty: number | null;
	region: string | null;
	review_rating_v2: number | null;
	review_ratings: number | null;
	size: string | null;
	sku: string | null;
	status: ProductStatusView;
	weight: string | null;
}

export interface SearchFreebieResponse$Freebie {
	brand: string | null;
	flavor: string | null;
	image_url: string | null;
	in_stock: boolean;
	name: string | null;
	product_code: string;
	region: string | null;
	size: string | null;
	sku: string;
}

export interface SearchOrderedProductResponse$Nav {
	image_url: string | null;
	name: string | null;
	nav_id: string | null;
	selected: boolean;
}

export interface SearchReferralActivityResponse$Referral {
	completed_time: string | null;
	created_time: string | null;
	email: string | null;
	status: SearchReferralActivityResponse$Status | null;
}

export interface SearchSuggestionResponse$Brand {
	action_url: string | null;
	name: string | null;
}

export interface SearchSuggestionResponse$HiddenSuggestion {
	action_url: string | null;
	name: string | null;
}

export interface SearchSuggestionResponse$Nav {
	action_url: string | null;
	name: string | null;
}

export interface SearchSuggestionResponse$Region {
	action_url: string | null;
	name: string | null;
}

export interface SearchSuggestionResponse$Suggestion {
	action_url: string | null;
	name: string | null;
}

export interface ShippingAddressView {
	address1: string | null;
	address2: string | null;
	city: string | null;
	company: string | null;
	country: string | null;
	country_code: string | null;
	default_address: boolean | null;
	first_name: string | null;
	id: string | null;
	last_name: string | null;
	phone: string | null;
	state: string | null;
	state_code: string | null;
	zip_code: string | null;
}

export interface SimpleProductView {
	brand: string | null;
	buy_limit_qty: number | null;
	code: string | null;
	flavor: string | null;
	image_url: string | null;
	msrp: number | null;
	name: string | null;
	need_check_will_melting: boolean;
	new_product: boolean | null;
	option: string | null;
	price: number | null;
	product_type: MobileProductTypeView | null;
	qty: number | null;
	region: string | null;
	review_rating_v2: number | null;
	review_ratings: number | null;
	size: string | null;
	sku: string | null;
	status: ProductStatusView;
	weight: string | null;
}

export interface TopNav {
	action_url: string | null;
	image_url: string | null;
	name: string | null;
}

