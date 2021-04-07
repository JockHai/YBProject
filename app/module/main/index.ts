import { call, Lifecycle, Module, register, SagaIterator } from "core-native";
import { CommonWebService } from "YBProject/app/service/api/CommonWebService";
import { HomePageWebService } from "YBProject/app/service/api/HomePageWebService";
import { NetworkService } from "YBProject/app/service/NetworkService";
import { BatchCheckFaveProductRequest, BatchCheckFaveProductRequest$Product, HomePageResponseV2, HomePageResponseV2$LoggedInData, HomeProductResponseV2, HomeProductResponseV2$LoggedInData, SimpleProductView, } from "YBProject/app/service/type/api";
import { RootState } from "../../type/state";
import { Navigation } from "../Navigation";
import Main from "./component/Main";
import { State, HomeProductListType, BatchCheckFave } from "./type";
import {Dimensions, PixelRatio} from "react-native";

const initialState: State = {
    shouldShowUpdateDialog: false,
    loggedInData: null,
    productData: null,
    isLoading: false,
    batchCheckFave: null,
};

class MainModule extends Module<RootState, "main"> {

    @Lifecycle()
    *onEnter():SagaIterator {
        // setTimeout(()=>{
            // yield * this.getAllData()
        // },1000)
        
    }

    *showUpdateDialog(): SagaIterator {
        this.setState({
            shouldShowUpdateDialog: !this.state.shouldShowUpdateDialog
        })
    }

    *getAllData(): SagaIterator {
        try {
            // Navigation.showLoading()
            this.setState({
                isLoading: true,
            })
            const result = yield* call(HomePageWebService.homeV2)
            yield* this.getProductAll()
            this.resetHomeInfo(result)
        } catch (e) {
            console.log("error:", e)
        } finally {
            console.log("finally")
            this.setState({
                isLoading: false,
            })
        }
    }

    *getProductAll(): SagaIterator {
        try {
            const result = yield* call(HomePageWebService.homeProductV2, { zip_code: "10001" })
            this.resetProductInfo(result)
            if (this.state.productData) {
                console.log("6666");
                yield* this.getFavouriteAll(this.state.productData)
            }
        } catch (e) {
            console.log("error:", e)
        }
    }

    *getFavourite(type: HomeProductListType): SagaIterator {
        let list: SimpleProductView[] = []
        const { batchCheckFave, productData } = this.state
        switch (type) {
            case HomeProductListType.FAVORITE:
                list = productData?.favorite_products ? productData?.favorite_products : []
                break
            case HomeProductListType.MOST_VIEW:
                list = productData?.most_viewed_products ? productData?.most_viewed_products : []
                break
            case HomeProductListType.NEW_PRODUCT:
                list = productData?.new_products ? productData?.new_products : []
                break
            case HomeProductListType.RECENTLY:
                list = productData?.recently_viewed_products ? productData?.recently_viewed_products : []
                break
            case HomeProductListType.REORDER:
                list = productData?.reorder_products ? productData?.reorder_products : []
                break
            default:
                break
        }
        if (list.length === 0) {
            console.log("00000");
            return
        }
        let products: BatchCheckFaveProductRequest$Product[] = []
        for (const value of list) {
            if (value.code && value.sku) {
                products.push({ code: value.code, sku: value.sku })
            }
        }
        if (products.length === 0) {
            console.log("9999");
            return
        }
        console.log("8888");
        try {
            const result = yield* call(CommonWebService.batchCheckFavorite, { products: products })
            console.log("result-info-product", result.products)
            let batchCheckFaveNew: BatchCheckFave
            if (batchCheckFave) {
                batchCheckFaveNew = {
                    ...batchCheckFave
                }
            } else {
                batchCheckFaveNew = {
                    favorite_products: null,
                    most_viewed_products: null,
                    new_products: null,
                    recently_viewed_products: null,
                    reorder_products: null,
                }
            }
            switch (type) {
                case HomeProductListType.FAVORITE:
                    batchCheckFaveNew.favorite_products = result.products
                    break
                case HomeProductListType.MOST_VIEW:
                    batchCheckFaveNew.most_viewed_products = result.products
                    break
                case HomeProductListType.NEW_PRODUCT:
                    batchCheckFaveNew.new_products = result.products
                    break
                case HomeProductListType.RECENTLY:
                    batchCheckFaveNew.recently_viewed_products = result.products
                    break
                case HomeProductListType.REORDER:
                    batchCheckFaveNew.reorder_products = result.products
                    break
                default:
                    break
            }
            this.setState({
                batchCheckFave: batchCheckFaveNew
            })
        } catch (e) {
            console.log("error:", e)
        }
    }

    resetHomeInfo(data: HomePageResponseV2) {
        if (NetworkService.config.customerLoggedIn === "true") {
            this.setState({
                loggedInData: data.logged_in_data
            })
        } else {
            if (data.not_logged_in_data) {
                let currentData: HomePageResponseV2$LoggedInData = {
                    ...data.not_logged_in_data,
                    available_rewards: null,
                    last_order: null,
                    need_display_points_expiration_warning: false,
                    points_expiration_warning_message: null,
                }
                this.setState({
                    loggedInData: currentData
                })
            }
        }
    }

    resetProductInfo(data: HomeProductResponseV2) {
        if (NetworkService.config.customerLoggedIn === "true") {
            this.setState({
                productData: data.logged_in_data
            })
        } else {
            if (data.not_logged_in_data) {
                let currentData: HomeProductResponseV2$LoggedInData = {
                    ...data.not_logged_in_data, favorite_products: null, reorder_products: null
                }
                this.setState({
                    productData: currentData
                })
            }
        }
    }

    *getFavouriteAll(data: HomeProductResponseV2$LoggedInData):SagaIterator {
        console.log("data:",data)
        if (NetworkService.config.customerLoggedIn === "true"){
            if (data.favorite_products){
                yield* this.getFavourite(HomeProductListType.FAVORITE)
            }
            if (data.reorder_products){
                yield* this.getFavourite(HomeProductListType.REORDER)
            }
        }
        if (data.most_viewed_products){
            yield* this.getFavourite(HomeProductListType.MOST_VIEW)
        }
        if (data.new_products){
            yield* this.getFavourite(HomeProductListType.NEW_PRODUCT)
        }
        if (data.recently_viewed_products){
            yield* this.getFavourite(HomeProductListType.RECENTLY)
        }   
        console.log("7777"); 
    }

}

const module = register(new MainModule("main", initialState))
export const actions = module.getActions()
export const AppComponent = module.attachLifecycle(Main)
