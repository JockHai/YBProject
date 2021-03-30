import { Module, register, SagaIterator } from "core-native";
import { RootState } from "../../type/state";
import Main from "./component/Main";  
import { State } from "./type";

const initialState: State = {
    shouldShowUpdateDialog: false,
};

class MainModule extends Module<RootState,"main"> {
    *showUpdateDialog():SagaIterator {
        this.setState({
            shouldShowUpdateDialog:!this.state.shouldShowUpdateDialog
        })
    }
}

const module = register(new MainModule("main",initialState))
export const actions = module.getActions()
export const AppComponent = module.attachLifecycle(Main)
