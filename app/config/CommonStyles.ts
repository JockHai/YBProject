import {Dimensions, StyleSheet, Platform, NativeModules} from "react-native";
import ScreenUtil from "../util/ScreenUtil";
import StyleUtil from "../util/StyleUtil";

const {width, height} = Dimensions.get("window");
const isIos = Platform.OS === "ios";
const font = "BasisGrotesquePro-Regular";
const fontBlack = "BasisGrotesquePro-Black";
const fontBold = "BasisGrotesquePro-Bold";
const fontLight = "BasisGrotesquePro-Light";
const fontMedium = "BasisGrotesquePro-Medium";
const primaryFont = "CheltenhamEF-Book";

const color = {
    // beetroot20: "rgba(160, 0, 107, 0.2)",
    black: "#231F20",
    brightWhite: "#fff",
    greenAccent: "#84AD14",
    redAccent: "#F94627",
    YBGray:"#f8f8f8"
};

const padding = StyleUtil.scale(30);
const IS_BANGSSCREEN = ScreenUtil.isBangsSreen;

export default {
    IS_BANGSSCREEN,
    isIos,
    headerHeight: IS_BANGSSCREEN ? 52 : StyleUtil.scale(68),
    headerPaddingBottom: IS_BANGSSCREEN ? 16 : 0,
    width,
    height,
    sizeDividerNormal: StyleSheet.hairlineWidth,//不同设备上的item之间的间距
    imgBaseHeight: StyleUtil.scale(267),
    imgBaseWidth: StyleUtil.scale(315),
    color,
    padding,
    primaryFont,
    font,
    fontLight,
    fontBlack,
    fontBold,
    fontMedium,
    body2: {
        fontFamily: font,
        fontSize: StyleUtil.scale(14),
        lineHeight: StyleUtil.scale(20),
        letterSpacing: StyleUtil.scale(0.2),
        color: color.black,
    },
};
