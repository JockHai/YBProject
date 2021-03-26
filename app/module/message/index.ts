import { call, Lifecycle, Module, register, SagaGenerator } from "core-native";
import { ShadowPropTypesIOS } from "react-native";
import { CustomerMessagePageWebService } from "YBProject/app/service/api/CustomerMessagePageWebService";
import { NetworkService } from "YBProject/app/service/NetworkService";
import { SearchCustomerMessageRequest, SearchCustomerMessageResponse } from "YBProject/app/service/type/api";
import StorageUtil from "YBProject/app/util/StorageUtil";
import { RootState } from "../../type/state";
import { Navigation } from "../Navigation";
import MessageList from "./component/MessageList";
import { State } from "./type";

const initialState: State = {
    page_index: 0,
    total_page: 0,
    messages: [],
    loadAll: false
};

class MessageListModule extends Module<RootState, "messagelist"> {

    @Lifecycle()
    *onEnter(): SagaGenerator {

    }

    *loadMessageList(pageIndex: number, pageSize: number = 20): SagaGenerator {
        try {
            Navigation.showLoading()
            const { messages,page_index,total_page } = yield* call(CustomerMessagePageWebService.searchMessage, {page_index: pageIndex,
                page_size: pageSize})
                
            console.log("JSON-INFO:", messages,page_index,total_page)
        } catch (e) {
            console.log("error:", e)
        } finally {
            console.log("finally")
            Navigation.hideLoading()
        }
    }
}

const module = register(new MessageListModule("messagelist", initialState))
export const actions = module.getActions()
export const MessageListComponent = module.attachLifecycle(MessageList)
