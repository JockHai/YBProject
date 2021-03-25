import { Banner, Brand, OrderView, TopNav } from "./OtherModels";

export interface HomePageResponseV2$LoggedInData {
    available_rewards: number | null
    feature_brands: Brand[] | null
    last_order: OrderView | null
    need_display_points_expiration_warning: boolean
    points_expiration_warning_message: string | null
    reward_background_image_url: string | null
    static_banners: Banner[]
    top_banners: Banner[]
    top_navs: TopNav[]
    view_all_new_products_action_url: string | null
}

export interface ReplaceSessionResponse {
    session_token: string
}