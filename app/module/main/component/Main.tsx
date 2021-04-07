import { showLoading, uri } from "core-native"
import { Container, View } from "native-base"
import React from "react"
import { Alert, Dimensions, Image, RefreshControl, SafeAreaView, StyleSheet, Text } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { connect, DispatchProp } from "react-redux"
import { Dispatch } from "redux"
import CommonStyles from "YBProject/app/config/CommonStyles"
import { HomePageResponseV2$LoggedInData, HomeProductResponseV2$LoggedInData } from "YBProject/app/service/type/api"
import StyleUtil from "YBProject/app/util/StyleUtil"
import { NavigationBar, navTypes } from "YBProject/app/widget/NavigationBar"
import ResourcesUtils from "../../../resources/ResourcesUtils"
import { RootState } from "../../../type/state"
import { Navigation, ScreenNames } from "../../Navigation"
import { actions as MainActions } from "../index"
import { BatchCheckFave } from "../type"
import Advertisement from "./weight/Advertisement"
import Category from "./weight/Category"
import Help from "./weight/Help"
import Order from "./weight/Order"
import ProductList from "./weight/ProductList"
import Reward from "./weight/Reward"
import ZipCode from "./weight/ZipCode"

interface StateProps {
    isLoading: boolean;
    shouldShowUpdateDialog: boolean;
    loggedInData: HomePageResponseV2$LoggedInData | null;
    productData: HomeProductResponseV2$LoggedInData | null;
    batchCheckFave: BatchCheckFave | null;
}

interface DispatchProps {
    changeButtonValue: () => void;
    getAllData: () => void;
}

export interface Props extends StateProps, DispatchProps { }

class AppMain extends React.PureComponent<Props> {

    render() {
        const { shouldShowUpdateDialog, changeButtonValue, getAllData, loggedInData, isLoading, batchCheckFave, productData } = this.props;
        let contents: Element[] = []
        if (loggedInData) {
            let static_top_banners: Element[] = []
            let static_bottom_banners: Element[] = []
            if (loggedInData && loggedInData.static_banners) {
                loggedInData.static_banners.forEach((item, index) => {
                    if (index < 3) {
                        static_top_banners.push(
                            (<TouchableOpacity activeOpacity={1} onPress={() => {
                                Alert.alert(item.action_url ? item.action_url : "null")
                            }} >
                                <Image style={styles.banner} source={{ uri: item.image_url ? item.image_url : "null" }}></Image>
                            </TouchableOpacity>)
                        )
                    } else {
                        static_bottom_banners.push(
                            (<TouchableOpacity activeOpacity={1} onPress={() => {
                                Alert.alert(item.action_url ? item.action_url : "null")
                            }} >
                                <Image style={styles.banner} source={{ uri: item.image_url ? item.image_url : "null" }}></Image>
                            </TouchableOpacity>)
                        )
                    }
                })
            }
            contents = ([
                <ZipCode />,
                <Category top_navs={loggedInData?.top_navs ?? []} />,
                <Advertisement top_banners={loggedInData?.top_banners ?? []} clickItem={(item, index) => {
                    console.log("item:", item, "index:", index)
                }} />,
                <Order order={loggedInData?.last_order ? loggedInData?.last_order : null}></Order>,
                <Reward reward_background_image_url={loggedInData?.reward_background_image_url ?? ""}
                    need_display_points_expiration_warning={loggedInData?.need_display_points_expiration_warning ?? false}
                    available_rewards={loggedInData?.available_rewards ?? 0}
                    points_expiration_warning_message={loggedInData?.points_expiration_warning_message ?? ""} />,
                <ProductList title={"Reorder"} checkFaves={batchCheckFave?.reorder_products} products={productData?.reorder_products ? productData?.reorder_products : []}></ProductList>,
                <ProductList title={"New Products"} checkFaves={batchCheckFave?.new_products} products={productData?.new_products ? productData?.new_products : []}></ProductList>] as Element[]).concat(static_top_banners).concat(
                    ([<ProductList title={"Most Viewed"} action_url={loggedInData?.view_all_new_products_action_url} checkFaves={batchCheckFave?.most_viewed_products} products={productData?.most_viewed_products ? productData?.most_viewed_products : []}></ProductList>,
                    <ProductList title={"Recently Viewed"} checkFaves={batchCheckFave?.recently_viewed_products} products={productData?.recently_viewed_products ? productData?.recently_viewed_products : []}></ProductList>])
                ).concat(static_bottom_banners).concat(
                    <ProductList title={"Favorites"} checkFaves={batchCheckFave?.favorite_products} products={productData?.favorite_products ? productData?.favorite_products : []}></ProductList>,
                    <Help></Help>
                )
        }


        return (
            <Container>
                <SafeAreaProvider>
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff', flexDirection: "column" }}>
                        <NavigationBar type={navTypes.HOME} style={{ width: CommonStyles.width, height: 44 }} />
                        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} alwaysBounceVertical={true}
                            contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
                            stickyHeaderIndices={[1]}
                            refreshControl={<RefreshControl colors={[CommonStyles.color.black]} tintColor={CommonStyles.color.black} refreshing={isLoading} onRefresh={getAllData} />}
                        >
                            {contents}
                        </ScrollView>
                    </SafeAreaView>
                </SafeAreaProvider>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    banner: {
        width: CommonStyles.width,
        height: (CommonStyles.width / 2.5),
        backgroundColor: "#666666",
        resizeMode: "cover",
        borderRadius: StyleUtil.scale(4),
        marginBottom: StyleUtil.scale(8)
    }
})

const mapStateToProps = (state: RootState): StateProps => ({
    shouldShowUpdateDialog: state.app.main.shouldShowUpdateDialog,
    loggedInData: state.app.main.loggedInData,
    isLoading: state.app.main.isLoading,
    productData: state.app.main.productData,
    batchCheckFave: state.app.main.batchCheckFave,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    changeButtonValue: () => dispatch(MainActions.showUpdateDialog()),
    getAllData: () => dispatch(MainActions.getAllData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMain);