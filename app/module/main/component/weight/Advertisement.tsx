import React from "react"
import { Image, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import CommonStyles from "YBProject/app/config/CommonStyles";
import { Banner } from "YBProject/app/service/type/api";
import StyleUtil from "YBProject/app/util/StyleUtil";

export interface Props {
    top_banners: Banner[],
    clickItem: (item: Banner, index?: number) => void
}

export default class Advertisement extends React.PureComponent<Props> {

    render() {
        const upItems: Element[] = [];
        this.props.top_banners.forEach((item, index) => {
            upItems.push(
                <TouchableOpacity key={index} activeOpacity={1} onPress={() => this.props.clickItem(item, index)}>
                    <Image source={{ uri: item.image_url ? item.image_url : "null", cache: "force-cache" }} style={styles.image} />
                </TouchableOpacity>
            )
        })
        return (
            <View style={{ width: CommonStyles.width, height: StyleUtil.scale(191), backgroundColor: "#black" }}>
                <Swiper
                    autoplayTimeout={60}
                    showsButtons={false}
                    autoplay={true}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dotStyle}
                    activeDotStyle={styles.activeDotStyle}
                >
                    {upItems}
                </Swiper>
                <View style={{left:0,right:0,top:0,height:StyleUtil.scale(3),backgroundColor:"#F8F8F8"}}></View>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        width: CommonStyles.width,
        backgroundColor: '#ffffff',
    },
    image: {
        width: CommonStyles.width,
        height: StyleUtil.scale(188),
        resizeMode: "contain"
    },
    dotStyle: {
        width: StyleUtil.scale(8),
        height: StyleUtil.scale(8),
        backgroundColor: '#6D6D6D',
        opacity: 0.4,
        borderRadius: StyleUtil.scale(4),
        borderWidth: StyleUtil.scale(1),
        borderColor: "#6D6D6D"
    },
    activeDotStyle: {
        width: StyleUtil.scale(8),
        height: StyleUtil.scale(8),
        backgroundColor: '#fff',
        borderRadius: StyleUtil.scale(4),
        borderWidth: StyleUtil.scale(1),
        borderColor: "#000000"
    },
    paginationStyle: {
        bottom: StyleUtil.scale(9),
    }
});
