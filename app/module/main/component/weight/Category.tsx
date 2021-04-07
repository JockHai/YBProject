import React from "react"
import { Image, StyleSheet,View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CommonStyles from "YBProject/app/config/CommonStyles";
import { TopNav } from "YBProject/app/service/type/api";
import StyleUtil from "YBProject/app/util/StyleUtil";

export interface Props {
    top_navs: TopNav[];
}

export default class Category extends React.PureComponent<Props>{

    rendItem({ item }: { item: TopNav }) {
        console.log(item)
        return (
            <View style={styles.item} key={item.action_url}>
                <Image style={styles.image} source={{uri:item.image_url ? item.image_url : "null",cache:"force-cache"}}></Image>
                <Text style={styles.title}>{item.name}</Text>
            </View>
        );
    }

    render() {
        if (this.props.top_navs.length > 0) {
            return (
                <View style={{ backgroundColor: '#ffffff', width: CommonStyles.width }}>
                    <FlatList
                        data={this.props.top_navs}
                        renderItem={this.rendItem}
                        keyExtractor={(item: TopNav) => item.action_url ? item.action_url : ""}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal={true}
                    />
                    <View style={{left:0,right:0,height:StyleUtil.scale(3),backgroundColor:"#F8F8F8"}}></View>
                </View>
            )
        }
        return null
    }
}

const styles = StyleSheet.create({
    item: {
        height:StyleUtil.scale(86),
        width: StyleUtil.scale(66),
        flexDirection: "column",
        backgroundColor: '#ffffff',
        alignItems: "center"
    },
    title: {
        marginTop: StyleUtil.scale(4),
        textAlign: "center",
        fontSize: StyleUtil.scale(10),
        color: "#000000"
    },
    image: {
        marginTop: StyleUtil.scale(7),
        width: StyleUtil.scale(48),
        height: StyleUtil.scale(48),
        resizeMode: "contain"
    }
})
