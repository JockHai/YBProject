import { State } from "core-native"
import { State as MainState } from "../module/main/type"
import { State as ProductDetailState } from "../module/productdetail/type"
import { State as MessageHistoryState } from "../module/message/type"
export interface RootState extends State {
    app: {
        main: MainState,
        productdetail:ProductDetailState
        messagelist:MessageHistoryState
    }
}