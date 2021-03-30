import { call } from "core-native";
import {Platform} from "react-native";
import DeviceInfo from "react-native-device-info";

export class Device {
    // Every time when we make changes for code push, remember to update both of below.
    // By having these two, we don't need to update again after code push is finished.
    // static CODE_PUSH_TARGET_VERSION = "1.25.0";
    // static CODE_PUSH_JS_VERSION = "1.25.1";

    static id() {
        return DeviceInfo.getUniqueId();
    }

    static deviceId() {
        return DeviceInfo.getDeviceId();
    }

    static device(){
        
        return DeviceInfo.getDeviceSync();
    }

    static applicationName(){
        return DeviceInfo.getApplicationName()
    }

    static product(){
        return DeviceInfo.getProductSync();
    }

    static os() {
        return Platform.OS + " " + DeviceInfo.getSystemVersion();
    }

    static macAddress() {
        return DeviceInfo.getMacAddressSync()
    }

    static manufacture() {
        return DeviceInfo.getManufacturerSync();
    }

    static model() {
        const model = DeviceInfo.getModel();
        if (!model || model === "unknown") {
            return this.deviceId();
        }
        return model;
    }

    static version() {
        return DeviceInfo.getVersion();
    }

    static systemVersion(){
        return DeviceInfo.getSystemVersion()
    }

    static buildNumber() {
        return DeviceInfo.getBuildNumber();
    }

    /**
     * This is the same as native version() by default, and is different if code push
     */
    // static jsVersion() {
    //     const nativeVersion = this.version();

    //     if (this.CODE_PUSH_TARGET_VERSION === nativeVersion) {
    //         return this.CODE_PUSH_JS_VERSION;
    //     } else {
    //         return nativeVersion;
    //     }
    // }

    
}
