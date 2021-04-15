import * as React from 'react';
import { connect } from "react-redux";
import 'react-native-gesture-handler';
import { View, Image, StyleSheet, Text, Dimensions, TouchableOpacity, ViewStyle, ImageSourcePropType } from 'react-native';
import CommonStyles from '../config/CommonStyles';
import ResourcesUtils from '../resources/ResourcesUtils';
import StyleUtil from '../util/StyleUtil';
import { RootState } from '../type/state';
import { Navigation } from '../module/Navigation';
import PromptConfig from '../config/PromptConfig';

export enum navTypes {
    HOME = "HOME",
    SEARCH = "SEARCH",
    REWARD = "REWARD",
    FAVOURITE = "FAVOURITE",
    ACCOUNT = "ACCOUNT",
    SIGN_IN = "SIGN_IN",
    PRODUCT_DETAIL = "PRODUCT_DETAIL",
    MESSAGE = "MESSAGE",
    FREEBIE = "FREEBIE",
    CART = "CART",
    ORDER_LIST = "ORDER_LIST",
    ORDER_DETAIL = "ORDER_DETAIL",
    REORDER = "REORDER",
    SHIPPING_ADDRESS = "SHIPPING_ADDRESS",
}

interface StateProps {
    cartNum?: number
}

interface Props extends StateProps {
    type: navTypes,
    title?: string,
    style?: ViewStyle,
    clickBackButton?: () => void,
    clickSwitchToSearch?: () => void,
    clickMessageButton?: () => void,
    clickGiftButton?: () => void,
    clickShippingCartButton?: () => void,
}

export class NavigationBar extends React.Component<Props> {

    constructor(props: Props) {
        super(props)
    }

    render() {
        switch (this.props.type) {
            case navTypes.HOME:
                return (
                    <View style={this.props.style}>
                        {this.renderHome()}
                    </View>
                )
            case navTypes.SIGN_IN:
                return (
                    <View style={this.props.style}>
                        {this.renderClose()}
                    </View>
                )
            // case navTypes.SEARCH:
            //     return (
            //         <View style={this.props.style}>
            //             {this.renderSearch()}
            //         </View>
            //     )
            // case navTypes.REWARD:
            //     return (
            //         <View style={this.props.style}>
            //             {this.renderByTitle('REWARDS', false)}
            //         </View>
            //     )
            case navTypes.ACCOUNT:
                return (
                    <View style={this.props.style}>
                        {this.renderByTitle(PromptConfig.account.TITLE, false)}
                    </View>
                )
            // case navTypes.FAVOURITE:
            //     return (
            //         <View style={this.props.style}>
            //             {this.renderByTitle('FAVORITES', false)}
            //         </View>
            //     )
            // case navTypes.PRODUCT_DETAIL:
            //     return (
            //         <View style={this.props.style}>
            //             {this.renderByTitle(this.props.info.title, true)}
            //         </View>
            //     )
            // case navTypes.MESSAGE:
            //     return (
            //         <View style={this.props.style}>
            //             {this.renderByShowCart('MESSAGE')}
            //         </View>
            //     )
            // case navTypes.FREEBIE:
            //     return (
            //         <View style={this.props.style}>
            //             {this.renderByShowCart('FREEBIE')}
            //         </View>
            //     )
            // case navTypes.ORDER_LIST:
            //     return (
            //         <View style={this.props.style}>
            //             {this.renderByOnlyTitle('ORDER HISTORY')}
            //         </View>
            //     )
            // case navTypes.REORDER:
            //     return (
            //         <View style={this.props.style}>
            //             {this.renderByOnlyTitle('REORDER')}
            //         </View>
            //     )
            // case navTypes.SHIPPING_ADDRESS:
            //     return (
            //         <View style={this.props.style}>
            //             {this.renderByOnlyTitle('SHIPPING ADDRESSES')}
            //         </View>
            //     )
            // case navTypes.ORDER_DETAIL:
            //     return (
            //         <View style={this.props.style}>
            //             {this.renderOrderDetail()}
            //         </View>
            //     )
            default:
                return (
                    <View style={this.props.style}>
                        {/* {this.renderByCart()} */}
                    </View>
                )
        }
    }

    // renderOrderDetail() {
    //     return (
    //         <View style={[styles.content, { width: this.props.style.width, height: this.props.style.height }]}>
    //             <TouchableOpacity onPress={() => navigationService.navigation.goBack()}>
    //                 <Image style={styles.back} source={imgBack}></Image>
    //             </TouchableOpacity>
    //             <Text style={styles.title}>ORDER DETAIL</Text>
    //             <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center", height: 42 }}>
    //                 <TouchableOpacity onPress={() => navigationService.navigation.navigate('ReorderPage')}>
    //                     <View style={{ marginRight: 15, paddingLeft: 8, paddingRight: 8, flexDirection: "row", justifyContent: "center", alignItems: "center", height: 26, borderRadius: 13, backgroundColor: "#000" }}>
    //                         <Image style={{ width: 16, height: 16, resizeMode: "contain" }} source={require('../../Images/Account/Order/icon_reorder.png')} />
    //                         <Text style={{ fontSize: 12, fontWeight: "bold", marginLeft: 6, color: "#fff" }}>REORDER</Text>
    //                     </View>
    //                 </TouchableOpacity>
    //             </View>
    //         </View>
    //     )
    // }

    // renderByOnlyTitle(title) {
    //     return (
    //         <View style={[styles.content, { width: this.props.style.width, height: this.props.style.height }]}>
    //             <TouchableOpacity onPress={() => navigationService.navigation.goBack()}>
    //                 <Image style={styles.back} source={imgBack}></Image>
    //             </TouchableOpacity>
    //             <Text style={styles.title, [{ width: Dimensions.get("window").width - 88, textAlign: "center" }]}>{title}</Text>
    //         </View>
    //     )
    // }

    // renderByCart() {
    //     return (
    //         <View style={[styles.content, { width: this.props.style.width, height: this.props.style.height }]}>
    //             <TouchableOpacity onPress={() => navigationService.navigation.goBack()}>
    //                 <Image style={styles.back} source={imgBack}></Image>
    //             </TouchableOpacity>
    //             <Text style={styles.title}>CART</Text>
    //             <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center", height: 42 }}>
    //                 <TouchableOpacity onPress={() => navigationService.navigation.navigate('Favorite')}>
    //                     <View style={{ marginRight: 15, paddingLeft: 8, paddingRight: 8, flexDirection: "row", justifyContent: "center", alignItems: "center", height: 26, borderRadius: 13, backgroundColor: "#000" }}>
    //                         <Image style={{ width: 10, height: 10, resizeMode: "contain" }} source={require('../../Images/Cart/icon_favorite_red.png')} />
    //                         <Text style={{ fontSize: 12, fontWeight: "bold", marginLeft: 4, color: "#fff" }}>FAVORITES</Text>
    //                     </View>
    //                 </TouchableOpacity>
    //             </View>
    //         </View>
    //     )
    // }

    // renderByShowCart(title) {
    //     return (
    //         <View style={[styles.content, { width: this.props.style.width, height: this.props.style.height }]}>
    //             <TouchableOpacity onPress={() => navigationService.navigation.goBack()}>
    //                 <Image style={styles.back} source={imgBack}></Image>
    //             </TouchableOpacity>
    //             <Text style={styles.title}>{title}</Text>
    //             <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center", height: 42 }}>
    //                 {this.renderItem([styles.itemSize, { marginRight: 10 }], imgCart)}
    //             </View>
    //         </View>
    //     )
    // }

    renderByTitle(title: string, showBack: boolean) {
        const style = this.props.style ? this.props.style : { width: CommonStyles.width, height: 44 }
        return (
            <View style={[styles.content, { width: style.width, height: style.height }]}>
                { showBack ?
                    <TouchableOpacity onPress={() => Navigation.goBack()}>
                        <Image style={styles.back} source={ResourcesUtils.icons.navBarBack}></Image>
                    </TouchableOpacity>
                    : null}
                <Text style={styles.title}>{title}</Text>
                {this.renderRight({ flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" })}
            </View>
        )
    }

    // renderSearch() {
    //     return (
    //         <View style={[styles.content, { width: this.props.style.width, height: this.props.style.height }]}>
    //             <View style={styles.searchBg}>
    //                 <Image style={{ width: 18, height: 18, resizeMode: "cover" }} source={imgSearch}></Image>
    //                 <Text style={{ fontSize: 15, color: "#969696" }}>  search yummy bazaar</Text>
    //             </View>
    //             {this.renderItem([styles.itemSize, { marginRight: 10, marginLeft: 4 }], imgCart)}
    //         </View>
    //     )
    // }

    renderClose() {
        const style = this.props.style ? this.props.style : { width: CommonStyles.width, height: 44 }
        return (
            <View style={[styles.content, { width: style.width, height: style.height }]}>
                <TouchableOpacity onPress={() => { Navigation.goBack() }}>
                    <Image style={styles.search} source={ResourcesUtils.icons.navClose} />
                </TouchableOpacity>
            </View>
        )
    }

    renderHome() {
        const style = this.props.style ? this.props.style : { width: CommonStyles.width, height: 44 }
        return (
            <View style={[styles.content, { width: style.width, height: style.height }]}>
                <TouchableOpacity onPress={() => { console.log(233) }}>
                    <Image style={styles.search} source={ResourcesUtils.icons.navBarHamburger} />
                </TouchableOpacity>
                <Image style={styles.logo} source={ResourcesUtils.icons.navBarLogo} />
                {this.renderRight({ flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" })}
            </View>
        )
    }

    renderRight(style: ViewStyle) {
        return (
            <View style={style}>
                {this.renderRightIcon([styles.itemSize, { marginRight: StyleUtil.scale(2) }] as ViewStyle, ResourcesUtils.icons.navBarMessage)}
                {this.renderRightIcon([styles.itemSize, { marginRight: StyleUtil.scale(2), marginBottom: StyleUtil.scale(3), }] as ViewStyle, ResourcesUtils.icons.navBarFreebie)}
                {this.renderRightIcon([styles.itemSize, { marginRight: StyleUtil.scale(10) }] as ViewStyle, ResourcesUtils.icons.navBarShippingCart)}
            </View>
        )
    }

    renderRightIcon(style: ViewStyle, img: ImageSourcePropType) {
        return (
            <TouchableOpacity style={style} onPress={() => {
                if (img === ResourcesUtils.icons.navBarMessage) {
                    // navigationService.navigation.navigate('MessagePage', { idx: 2, title: 'MessagePage-TITLE' })
                } else if (img === ResourcesUtils.icons.navBarFreebie) {
                    // navigationService.navigation.navigate('FreebiePage', { idx: 3, title: 'FreebiePage-TITLE', backBlock: (data) => console.log(data) })
                } else if (img === ResourcesUtils.icons.navBarShippingCart) {
                    // navigationService.navigation.navigate('CartPage', { idx: 3, title: 'FreebiePage-TITLE' })
                }
            }
            }>
                <Image style={{ width: StyleUtil.scale(36), height: StyleUtil.scale(36), resizeMode: "center", }} source={img} />
                {
                    img === ResourcesUtils.icons.navBarShippingCart ? <View style={{ borderRadius: StyleUtil.scale(7), borderColor: "#000", borderWidth: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#ffffff", minWidth: StyleUtil.scale(14), height: StyleUtil.scale(16), position: "absolute", top: StyleUtil.scale(4.5), right: StyleUtil.scale(3) }}>
                        <Text style={{ fontSize: StyleUtil.scale(8), marginLeft: 1, marginRight: 1 }}>{this.props.cartNum}9</Text>
                    </View> : null
                }
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    title: {
        fontSize: StyleUtil.scale(15),
        left: StyleUtil.scale(44),
        position: 'absolute',
        fontWeight: '500',
        textAlign: 'center',
        width: CommonStyles.width - StyleUtil.scale(88)
    },
    back: {
        marginLeft: 10,
        height: 44,
        width: 44,
        resizeMode: "center"
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffffff",
        shadowOffset: { width: 0, height: 1 },
        shadowColor: "#ccc",
        shadowRadius: 1,
        shadowOpacity: 0.5,
        elevation: 1,
    },
    searchBg: {
        flex: 1,
        flexDirection: "row",
        height: 33,
        marginLeft: StyleUtil.scale(20),
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16.5,
    },
    search: {
        marginLeft: StyleUtil.scale(10),
        height: 44,
        width: 44,
        resizeMode: "center"
    },
    logo: {
        resizeMode: "center",
        height: StyleUtil.scale(22),
        width: StyleUtil.scale(152),
    },
    itemSize: {
        alignItems: "center",
        backgroundColor: "#fff"
    }
});

const mapStateToProps = (state: RootState): StateProps => ({
    cartNum: state.app.productdetail.addNum
})
export default connect(mapStateToProps)(NavigationBar);