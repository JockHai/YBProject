import React from "react"
import { Image, StyleSheet, View, Text } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CommonStyles from "YBProject/app/config/CommonStyles";
import ResourcesUtils from "YBProject/app/resources/ResourcesUtils";
import { NetworkService } from "YBProject/app/service/NetworkService";
import { TopNav } from "YBProject/app/service/type/api";
import StyleUtil from "YBProject/app/util/StyleUtil";

export interface Props {
    available_rewards: number,
    points_expiration_warning_message: string,
    need_display_points_expiration_warning: boolean,
    reward_background_image_url: string,
}

export default class Reward extends React.PureComponent<Props>{

    render() {
        const { available_rewards, points_expiration_warning_message, need_display_points_expiration_warning, reward_background_image_url } = this.props;
        let btnTitle = ""
        let noticeInfo = ""
        let errorInfo = ""
        if (NetworkService.config.customerLoggedIn === "true") {
            btnTitle = available_rewards === 0 ? " SEE DETAILS" : " REDEEM NOW"
            noticeInfo = available_rewards === 0 ? "Get Rewarded!" : available_rewards.toString() + " Rewards Available"
            errorInfo = points_expiration_warning_message
        } else {
            btnTitle = " SEE DETAILS"
            noticeInfo = "Get Rewarded!"
        }
        let node: Element | null;
        if (need_display_points_expiration_warning) {
            node = (<View style={{ backgroundColor: "#E4E4E4", justifyContent: "center", position: "absolute", height: StyleUtil.scale(62), width: CommonStyles.width }} >
                <Text numberOfLines={2} style={{ color: "#202727", fontSize: StyleUtil.scale(12), marginLeft: StyleUtil.scale(16), marginRight: StyleUtil.scale(137) }}>{errorInfo}</Text>
            </View>)
        } else {
            node = null
        }
        return (
            <View style={{ height: StyleUtil.scale(62), width: CommonStyles.width, backgroundColor: "#ffffff" }} >
                <Image style={styles.imgBackground} source={{ uri: reward_background_image_url, cache: "force-cache" }} />
                <View style={styles.viewCenter} >
                    <Text style={{ flex: 1, color: "#384748", textAlign: "right", fontSize: StyleUtil.scale(18), fontWeight: "500", paddingRight: StyleUtil.scale(18) }}>{noticeInfo}</Text>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={{ width: StyleUtil.scale(118), height: StyleUtil.scale(30), borderRadius: StyleUtil.scale(15), backgroundColor: "#000000", marginRight: StyleUtil.scale(13), flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Image source={ResourcesUtils.icons.mainPointsStar} style={{ width: StyleUtil.scale(15), height: StyleUtil.scale(15), resizeMode: "cover", paddingBottom: StyleUtil.scale(1), paddingRight: StyleUtil.scale(2) }}></Image>
                            <Text style={{ color: "#ffffff", fontSize: StyleUtil.scale(12), lineHeight: StyleUtil.scale(12), textAlign: "center", paddingLeft: StyleUtil.scale(2), paddingTop: StyleUtil.scale(1) }}>REDEEM NOW</Text>
                        </View>
                    </TouchableOpacity>
                    {node}
                </View>
                <View style={{left:0,right:0,height:StyleUtil.scale(3),backgroundColor:"#F8F8F8"}}></View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBackground: {
        resizeMode: "cover",
        zIndex: 1,
        height: StyleUtil.scale(62),
        width: CommonStyles.width,
        position: "absolute",
    },
    viewCenter: {
        height: StyleUtil.scale(62),
        width: CommonStyles.width,
        paddingLeft: StyleUtil.scale(65),
        zIndex: 2,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
    }
})
