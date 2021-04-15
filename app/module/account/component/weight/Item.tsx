import React from "react"
import { Image, StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CommonStyles from "YBProject/app/config/CommonStyles";
import { TopNav } from "YBProject/app/service/type/api";
import StyleUtil from "YBProject/app/util/StyleUtil";

export interface Props {
    onPress: () => void;
    title: string;
    img: ImageSourcePropType | null
}

export default class Item extends React.PureComponent<Props>{
    render() {
        const { onPress, title, img } = this.props
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
                <View style={{ height: StyleUtil.scale(48), backgroundColor: '#ffffff', width: CommonStyles.width, flexDirection: "row", alignItems: "center" }}>
                    {img === null ? null : <Image source={img} style={styles.imgLeft}></Image>}
                    {img === null ? <Text style={styles.titleNormal}>{title}</Text> : <Text style={styles.title}>{title}</Text>}
                    <Text style={styles.labGo}>{">"}</Text>
                </View>
                <View style={{ left: 0, right: 0, height: StyleUtil.scale(1), backgroundColor: CommonStyles.color.YBGray }}></View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    imgLeft: {
        width: StyleUtil.scale(78),
        resizeMode: "center",
    },
    item: {
        height: StyleUtil.scale(86),
        width: StyleUtil.scale(66),
        flexDirection: "column",
        backgroundColor: '#ffffff',
        alignItems: "center"
    },
    title: {
        flex: 1,
        fontSize: StyleUtil.scale(14),
        color: "#000000"
    },
    titleNormal: {
        flex: 1,
        paddingLeft: StyleUtil.scale(31),
        fontSize: StyleUtil.scale(14),
        color: "#000000"
    },
    labGo: {
        right: StyleUtil.scale(18),
        fontSize: StyleUtil.scale(11),
        color: "#000000"
    }
})
