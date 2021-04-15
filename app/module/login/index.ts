import { call, Lifecycle, Module, register, SagaIterator } from "core-native";
import { RootState } from "../../type/state";
import SignIn from "./component/SignIn";
import { State } from "./type";

const initialState: State = {

};

class SignInModule extends Module<RootState, "signin"> {

    // @Lifecycle()
    // *onEnter(): SagaIterator {
        // setTimeout(()=>{
        // yield * this.getAllData()
        // },1000)
    // }

    *login(): SagaIterator {
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

    *create(): SagaIterator {
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

const module = register(new SignInModule("signin", initialState))
export const actions = module.getActions()
export const SignInComponent = module.attachLifecycle(SignIn)
