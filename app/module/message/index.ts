import { call, Lifecycle, Module, register, SagaGenerator } from "core-native";
import { ShadowPropTypesIOS } from "react-native";
import { ajax } from "YBProject/app/service/network";
import { NetworkService } from "YBProject/app/service/NetworkService";
import StorageUtil from "YBProject/app/util/StorageUtil";
import { RootState } from "../../type/state";
import { Navigation } from "../Navigation";
import MessageList from "./component/MessageList";
import { State, SearchCustomerMessageRequest, SearchCustomerMessageResponse } from "./type";

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
            const { messages,page_index,total_page } = yield* call(queryMessageList, {page_index: pageIndex,
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

export function queryMessageList(request: SearchCustomerMessageRequest): Promise<SearchCustomerMessageResponse> {
    return NetworkService.ajax("GET","/message-page/message",{},request)
}

const module = register(new MessageListModule("messagelist", initialState))
export const actions = module.getActions()
export const MessageListComponent = module.attachLifecycle(MessageList)
