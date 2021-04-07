import { BatchCheckFaveProductResponse$Product, HomePageResponse$LoggedInData, HomePageResponseV2$LoggedInData, HomeProductResponseV2$LoggedInData } from "YBProject/app/service/type/api";

export interface State {
    shouldShowUpdateDialog: boolean;
    loggedInData: HomePageResponseV2$LoggedInData | null;
    productData: HomeProductResponseV2$LoggedInData | null;
    batchCheckFave: BatchCheckFave | null;
    isLoading: boolean;

}

export interface BatchCheckFave {
    favorite_products: BatchCheckFaveProductResponse$Product[] | null;
    most_viewed_products: BatchCheckFaveProductResponse$Product[] | null;
    new_products: BatchCheckFaveProductResponse$Product[] | null;
    recently_viewed_products: BatchCheckFaveProductResponse$Product[] | null;
    reorder_products: BatchCheckFaveProductResponse$Product[] | null;
}

export interface ProductAdditionalConfig {
    isFavourite: boolean | null
}

export enum HomeProductListType {
    MOST_VIEW = "MOSTVIEW",
    FAVORITE = "FAVORITE",
    NEW_PRODUCT = "NEW_PRODUCT",
    RECENTLY = "RECENTLY",
    REORDER = "REORDER"
}