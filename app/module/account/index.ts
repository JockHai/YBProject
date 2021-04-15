import { call, Lifecycle, Module, register, SagaIterator } from "core-native";
import { RootState } from "../../type/state";
import Account from "./component/Account";
import { State } from "./type";


const initialState: State = {
    isLoading:false
};

class AccountModule extends Module<RootState, "account"> {

    // @Lifecycle()
    // *onEnter(): SagaIterator {
        // setTimeout(()=>{
        // yield * this.getAllData()
        // },1000)
    // }

    *getAllData(): SagaIterator {
        // try {
        //     // Navigation.showLoading()
        //     this.setState({
        //         isLoading: true,
        //     })
        //     const result = yield* call(HomePageWebService.homeV2)
        //     yield* this.getProductAll()
        //     this.resetHomeInfo(result)
        // } catch (e) {
        //     console.log("error:", e)
        // } finally {
        //     this.setState({
        //         isLoading: false,
        //     })
        // }
    }
}

const module = register(new AccountModule("account", initialState))
export const actions = module.getActions()
export const AccountComponent = module.attachLifecycle(Account)
