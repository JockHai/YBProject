import { call, Lifecycle, Module, register, SagaIterator } from "core-native";
import { ShadowPropTypesIOS } from "react-native";
import { ajax } from "YBProject/app/service/network";
import StorageUtil from "YBProject/app/util/StorageUtil";
import { RootState } from "../../type/state";
import { Navigation } from "../Navigation";
import ProductDetail from "./component/ProductDetail";
import { State } from "./type";

const initialState: State = {
    changeValue: "",
    addNum: 0
};

interface getJSONP {

}

interface getJSONR {
    services?: string
}

class ProductDetailModule extends Module<RootState, "productdetail"> {

    @Lifecycle()
    *onEnter(): SagaIterator {
        StorageUtil.getString("yb").then(_ => this.setState({ changeValue: _ ?? "" })).catch(_ => this.setState({ changeValue: "" }))
    }

    *showUpdateDialog(): SagaIterator {
        console.log("123")
    }

    *getJSON(): SagaIterator {
        try {
            Navigation.showLoading()
            const { services } = yield* call(queryPlace, {})
            console.log("JSON-INFO:", services)
        } catch (e) {
            console.log("error:", e)
        } finally {
            console.log("finally")
            Navigation.hideLoading()
        }
    }

    *saveLocalInfo(key: string, value: string): SagaIterator {
        StorageUtil.saveString(key, value).then(() => this.setState({ changeValue: value, addNum:this.state.addNum+1}))
    }

    *delLocalInfo(key: string): SagaIterator {
        StorageUtil.remove(key).then(() => this.setState({ changeValue: "",addNum:0 }))
    }
}

export function queryPlace(request: getJSONP): Promise<getJSONR> {
    return ajax("get", "https://mobile-service-v3.yummybazaar-qa.com/_sys/api2", {}, null, "")
}

const module = register(new ProductDetailModule("productdetail", initialState))
export const actions = module.getActions()
export const ProductComponent = module.attachLifecycle(ProductDetail)
