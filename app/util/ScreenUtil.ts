import {Platform, NativeModules} from "react-native";

export default class ScreenUtil {
    static get isBangsSreen(): boolean {
        return false//Platform.OS === "ios" ? NativeModules.ScreenUtil.isBangsScreen : false;
    }
}
