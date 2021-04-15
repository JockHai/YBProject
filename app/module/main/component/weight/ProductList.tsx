import React from "react"
import { Image, StyleSheet, View, Text, Alert } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CommonStyles from "YBProject/app/config/CommonStyles";
import { BatchCheckFaveProductResponse$Product, SimpleProductView, TopNav } from "YBProject/app/service/type/api";
import { AddFaveProductRequest$SourceModule, AddFaveProductRequest$SourcePage } from "YBProject/app/service/type/TrackKeys";
import StyleUtil from "YBProject/app/util/StyleUtil";
import { ProductAdditionalConfig } from "../../type";
import Product from "./Product";

export interface Props {
    products: SimpleProductView[],
    checkFaves?: BatchCheckFaveProductResponse$Product[]|null,
    title: string,
    module:string | null,
    action_url?: string | null,
}

export default class ProductList extends React.PureComponent<Props>{

    rendItem=({ item }:{ item: SimpleProductView }) =>{
        let pro: ProductAdditionalConfig = { isFavourite: null }
        if (this.props?.checkFaves) {
            for (const value of this.props.checkFaves) {
                if (value.product_code === item.code && value.sku === item.sku) {
                    pro.isFavourite = value.favorite
                    break
                }
            }
        }
        return (
            <Product source_module={this.props.module} source_page={AddFaveProductRequest$SourcePage.HOME} onPressShoppingCart={(id) => console.log("click:", id)} style={{ width: StyleUtil.scale(160),marginLeft:StyleUtil.scale(8), height: StyleUtil.scale(305) }} product={{ ...item, ...pro }}></Product>
        );
    }

    render() {
        if (this.props.products.length > 0) {
            return (
                <View style={styles.content}>
                    <View style={styles.viewTop}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <TouchableOpacity onPress={()=>{
                            Alert.alert(this.props.action_url ?? "")
                        }} style={{marginRight:StyleUtil.scale(12)}}>
                        <Text style={styles.subTitle}>{this.props?.action_url ? "View All" : "View All"}</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={styles.flatList}
                        data={this.props.products}
                        renderItem={this.rendItem}
                        keyExtractor={(item: SimpleProductView) => item.code ? item.code : ""}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal={true}
                    />
                    <View style={{left:0,right:0,top:0,height:StyleUtil.scale(3),backgroundColor:"#F8F8F8"}}></View>
                </View>
            )
        }
        return null
    }
}

const styles = StyleSheet.create({
    content: {
        alignItems: "stretch",
        flexDirection: "column",
        backgroundColor: '#ffffff',
        height: StyleUtil.scale(360),
        width: CommonStyles.width
    },
    viewTop: {
        height: StyleUtil.scale(45),
        flexDirection: "row",
        alignItems:"center",
    },
    title: {
        flex: 1,
        color: "#000000",
        fontSize: StyleUtil.scale(18),
        marginLeft:StyleUtil.scale(12),
        fontWeight: "500"
    },
    subTitle: {
        color: "#000000",
        textDecorationLine: "underline",
        fontSize: StyleUtil.scale(13),
    },
    flatList: {
        height: StyleUtil.scale(305),
        marginBottom: StyleUtil.scale(10)
    },
})
