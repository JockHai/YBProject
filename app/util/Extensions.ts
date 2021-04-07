// import { Dimensions, PixelRatio } from "react-native";

// const UI_STANDARD = 375;

// const roundToNearestPixel = (layoutSize: number) => PixelRatio.roundToNearestPixel(layoutSize);

// Number.prototype.scale = (isFloor: boolean = false) => {
//     let width = Number(this)
//     if (isFloor) {
//         return PixelRatio.roundToNearestPixel(Math.floor((Dimensions.get("window").width / UI_STANDARD) * width))
//     }
//     return PixelRatio.roundToNearestPixel((Dimensions.get("window").width / UI_STANDARD) * width)
// }

// String.prototype.showInfo = ()=>{
//     return (String(this) as string) + "233"
// }

// declare global{
//     interface Number {
//         scale(isFloor: boolean):number
//     }
// }

// export {}