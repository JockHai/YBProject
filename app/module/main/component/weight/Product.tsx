
import * as React from 'react';
import 'react-native-gesture-handler';
import { View, Image, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { Alert } from 'react-native';
import StyleUtil from 'YBProject/app/util/StyleUtil';
import { ProductStatusView, SimpleProductView } from 'YBProject/app/service/type/api';
import StarRating from 'react-native-star-rating';
import ResourcesUtils from 'YBProject/app/resources/ResourcesUtils';
import { ProductAdditionalConfig } from '../../type';

interface Props {
    style: ViewStyle,
    product: SimpleProductView & ProductAdditionalConfig,
    onPressShoppingCart: (id: string) => void,
}

export default class Product extends React.PureComponent<Props> {

    render() {
        const { style, product, onPressShoppingCart } = this.props
        let widthParent = 0
        let heighParent = 0
        if (style) {
            widthParent = style.width ? (style.width as number) : 0
            heighParent = style.height ? style.height as number : 0
        }
        return (
            <View style={{ width: widthParent, height: heighParent, marginLeft: StyleUtil.scale(8) }}>
                <TouchableOpacity activeOpacity={1} style={[styles.viewUpTouch, { justifyContent: "center", width: widthParent, height: heighParent }]} onPress={() => Alert.alert('Sku:' + product.sku ?? "" )}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.viewFavouriteTouch} onPress={() => Alert.alert('Adding to favorite')}>
                        <Image style={styles.viewFavourite} source={product.isFavourite ? ResourcesUtils.icons.productCollect.selected : ResourcesUtils.icons.productCollect.normal} ></Image>
                    </TouchableOpacity>
                    {this.renderStatue()}
                </TouchableOpacity>
                <View style={[styles.viewBottom, { left: StyleUtil.scale(10), width: widthParent - StyleUtil.scale(20), height: heighParent }]}>
                    {this.renderImage()}
                    <Text style={styles.txtBrands} numberOfLines={1}>{product.brand ?? ""}</Text>
                    <Text style={styles.txtProduct} numberOfLines={3}>{product.name ?? ""}</Text>
                    <Text style={styles.txtSku} numberOfLines={1}>{product.weight ?? ""}</Text>
                    {this.renderStar()}
                    <View style={styles.viewPrice}>
                        <Text style={styles.txtPrice}>$ {product.price?.toFixed(2) ?? "0.00"}</Text>
                        <Text style={styles.txtOffer}> {product.msrp ? "$" + product.msrp?.toFixed(2) : ""}</Text>
                    </View>
                    <Text style={styles.txtCountry}>{(product.region ?? "").toUpperCase()}</Text>
                    <View style={{ position: "absolute", height: 1, right: 0, left: 0, bottom: 0, backgroundColor: "#C5C5C5" }}></View>
                </View >
                {product.new_product ?
                    <Image source={ResourcesUtils.icons.newByList} style={{ zIndex: 2, resizeMode: "cover", width: StyleUtil.scale(38), height: StyleUtil.scale(16), position: "absolute", marginLeft: StyleUtil.scale(-3), marginTop: StyleUtil.scale(12) }}></Image>
                    : null}
            </View>
        )
    }

    renderStar() {
        let numRating: number = 0
        if (this.props.product.review_rating_v2) {
            numRating = Math.floor(this.props.product.review_rating_v2)
        }
        return (
            <View style={styles.viewStar}>
                <StarRating disabled={false} emptyStar={ResourcesUtils.icons.reviewStar.normal} fullStar={ResourcesUtils.icons.reviewStar.selected} starSize={StyleUtil.scale(12)} rating={numRating} maxStars={5}></StarRating>
            </View>
        )
    }

    renderImage() {
        return (
            <Image style={styles.imgProduct} source={{ uri: this.props.product.image_url ?? "null", cache: "force-cache" }}></Image>
        )
    }

    renderStatue() {
        const { product } = this.props
        const shoppingCart = (
            <TouchableOpacity activeOpacity={1} style={styles.viewShopCartTouch} onPress={() => Alert.alert('Adding to cart')}>
                <Image style={styles.viewShopCart} source={ResourcesUtils.icons.addToCart}></Image>
            </TouchableOpacity>
        )

        const notifyMe = (
            <View style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0.4)", position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity activeOpacity={1} onPress={() => Alert.alert('Notify Me')}>
                    <View style={{ borderRadius: StyleUtil.scale(19), backgroundColor: "#ffffff", borderColor: "black", borderWidth: 1, width: StyleUtil.scale(104), height: StyleUtil.scale(38), alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: StyleUtil.scale(14) }}>Notify Me</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )

        const moreInfo = (
            <TouchableOpacity activeOpacity={1} style={{ alignSelf: "center" }} onPress={() => Alert.alert('View More')}>
                <View style={{ borderRadius: StyleUtil.scale(19), backgroundColor: "#ffffff", borderColor: "black", borderWidth: 1, width: StyleUtil.scale(104), height: StyleUtil.scale(38), alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: StyleUtil.scale(14) }}>View More</Text>
                </View>
            </TouchableOpacity>
        )

        const soldOut = (
            <View style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0.4)", position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity activeOpacity={1} onPress={() => Alert.alert('Notify Me')}>
                    <View style={{ borderRadius: StyleUtil.scale(1), backgroundColor: "rgba(255, 255, 255, 0.8)", borderColor: "black", borderWidth: 1, width: StyleUtil.scale(104), height: StyleUtil.scale(44), alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ fontSize: StyleUtil.scale(14), textAlign: "center" }} numberOfLines={2}>{"NOT\nAVAILABLE"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
        switch (product.status) {
            case ProductStatusView.AVAILABLE:
                return shoppingCart
            case ProductStatusView.DELETED, ProductStatusView.UNAVAILABLE:
                return soldOut
            case ProductStatusView.OUT_OF_STOCK:
                return notifyMe
            case ProductStatusView.VIEW_MORE:
                return moreInfo
        }
    }
}

const styles = StyleSheet.create({
    viewUpTouch: {
        zIndex: 2,
        position: 'absolute'
    },
    viewShopCart: {
        width: StyleUtil.scale(40),
        height: StyleUtil.scale(40),
        resizeMode: "cover"
    },
    viewShopCartTouch: {
        width: StyleUtil.scale(40),
        height: StyleUtil.scale(40),
        alignSelf: 'flex-end',
        top: StyleUtil.scale(84),
        right: StyleUtil.scale(9),
    },
    viewFavourite: {
        width: StyleUtil.scale(28),
        height: StyleUtil.scale(28),
        resizeMode: "center"
    },
    viewFavouriteTouch: {
        position: "absolute",
        right: StyleUtil.scale(3),
        top: StyleUtil.scale(3),
    },
    viewMore: {
        width: StyleUtil.scale(96),
        height: StyleUtil.scale(40),
        top: StyleUtil.scale(84),
        alignSelf: 'center',
        justifyContent: "center",
        borderWidth: StyleUtil.scale(1),
        borderRadius: StyleUtil.scale(20),
        borderColor: "#000",
        backgroundColor: "#fff",
    },
    textMore: {
        textAlign: "center",
        fontSize: StyleUtil.scale(12),
        padding: StyleUtil.scale(1),
        color: "#000"
    },
    viewBottom: {
        position: 'absolute',
        flexDirection: 'column',
    },
    imgProduct: {
        top: StyleUtil.scale(10),
        height: StyleUtil.scale(145),
        resizeMode: "contain",
    },
    txtBrands: {
        position: "absolute",
        top: StyleUtil.scale(164),
        fontSize: StyleUtil.scale(11),
        fontWeight: "500",
        color: "#000",
    },
    txtProduct: {
        position: "absolute",
        top: StyleUtil.scale(180),
        fontSize: StyleUtil.scale(13),
        fontWeight: "300",
        color: "#000",
    },
    txtSku: {
        position: "absolute",
        top: StyleUtil.scale(227),
        fontSize: StyleUtil.scale(13),
        color: "#000",
    },
    viewStar: {
        position: "absolute",
        bottom: StyleUtil.scale(42),
        justifyContent: "center",
        height: StyleUtil.scale(24),
        width: StyleUtil.scale(60),
    },
    viewPrice: {
        position: "absolute",
        bottom: StyleUtil.scale(24),
        flexDirection: "row",
        alignItems: "flex-end",
    },
    txtPrice: {
        fontSize: StyleUtil.scale(15),
        color: "#000",
    },
    txtOffer: {
        fontSize: StyleUtil.scale(11),
        textDecorationLine: "line-through",
        color: "#979797",
        marginBottom: StyleUtil.scale(2),
    },
    txtCountry: {
        position: "absolute",
        fontSize: StyleUtil.scale(11),
        color: "#979797",
        fontWeight: "300",
        bottom: StyleUtil.scale(5),
    }
})