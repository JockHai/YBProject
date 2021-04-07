import {Dimensions, PixelRatio} from "react-native";

const UI_STANDARD = 375;

function scale(width: number, isFloor: boolean = false) {
    if (isFloor) {
        return PixelRatio.roundToNearestPixel(Math.floor((Dimensions.get("window").width / UI_STANDARD) * width));
    }
    return PixelRatio.roundToNearestPixel((Dimensions.get("window").width / UI_STANDARD) * width);
}




const roundToNearestPixel = (layoutSize: number) => PixelRatio.roundToNearestPixel(layoutSize);

export default {scale, roundToNearestPixel};
