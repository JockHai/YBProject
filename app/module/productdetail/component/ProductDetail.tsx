import { StackRouterOptions } from "@react-navigation/routers"
import { StackScreenProps } from "@react-navigation/stack"
import { NetworkConnectionException, uri } from "core-native"
import { Container,Button } from "native-base"
import React from "react"
import { Dimensions, Image, SafeAreaView, Text, } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { connect, DispatchProp } from "react-redux"
import { Dispatch } from "redux"
import CommonStyles from "YBProject/app/config/CommonStyles"
import StorageUtil from "YBProject/app/util/StorageUtil"
import NavigationBar, { navTypes } from "YBProject/app/widget/NavigationBar"
import ResourcesUtils from "../../../resources/ResourcesUtils"
import { ajax } from "../../../service/network"
import { RouteParamsList } from "../../../type/routeParams"
import { RootState } from "../../../type/state"
import { Navigation, ScreenNames } from "../../Navigation"
import { actions as ProductDetailActions } from "../index"

interface StateProps {
    changeValue : string,
    numberAdd:number
}

interface DispatchProps {
    getJSON: () => void,
    saveLocalInfo: (key: string, value: string) => void,
    delLocalInfo: (key: string) => void,
}

export interface Props extends StackScreenProps<RouteParamsList, ScreenNames.ProductDetail>, DispatchProps, StateProps {

}

interface state {
    showValue:string
}

class ProductDetail extends React.PureComponent<Props> {
    render() {
        let num: number = 0
        if (this.props.route.params && this.props.route.params.showNum) {
            num = this.props.route.params.showNum
        }
        const { getJSON,saveLocalInfo,delLocalInfo,changeValue,numberAdd } = this.props;
        return (
            <Container>
                <SafeAreaProvider>
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff', flexDirection: "column" }}>
                        <NavigationBar type={navTypes.HOME} style={{width:CommonStyles.width,height:44}}/>
                        <Button style={{ flexDirection: "row", margin: 8 }} onPress={() =>
                            Navigation.goBack()
                        }><Text style={{ flex: 1, textAlign: "center" }}>Back</Text></Button>
                        <Button style={{ flexDirection: "row", margin: 8 }} onPress={() =>
                            Navigation.push(ScreenNames.ProductDetail, { showNum: num + 1 })
                        }><Text style={{ flex: 1, textAlign: "center" }}>Next{num} -- 1</Text></Button>
                        <Button style={{ flexDirection: "row", margin: 8 }} onPress={() => {
                            if (changeValue.length > 10 ){
                                delLocalInfo("yb")
                            }else{
                                saveLocalInfo("yb","6666" + changeValue)
                            }

                        }
                        }><Text style={{ flex: 1, textAlign: "center" }}>saveInfo</Text></Button>
                        <Text>{changeValue}</Text>
                        <Text>addNumber:{numberAdd}</Text>
                    </SafeAreaView>
                </SafeAreaProvider>
            </Container>
        )
    }
}

const mapStateToProps = (state: RootState): StateProps => ({
    changeValue:state.app.productdetail.changeValue,
    numberAdd:state.app.productdetail.addNum
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    getJSON: () => dispatch(ProductDetailActions.getJSON()),
    saveLocalInfo: (key: string, value: string) => dispatch(ProductDetailActions.saveLocalInfo(key, value)),
    delLocalInfo: (key: string) => dispatch(ProductDetailActions.delLocalInfo(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);