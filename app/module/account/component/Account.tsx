
import React from 'react'
import { RootState } from 'YBProject/app/type/state';
import { Dispatch } from "redux"
import { connect } from "react-redux"
import { actions as AccountActioins } from '../index'
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { Container, View } from "native-base"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Alert, DeviceEventEmitter, Image, RefreshControl, SafeAreaView, StyleSheet, Text } from "react-native"
import { NavigationBar, navTypes } from 'YBProject/app/widget/NavigationBar';
import CommonStyles from 'YBProject/app/config/CommonStyles';
import Item from './weight/Item';
import ResourcesUtils from 'YBProject/app/resources/ResourcesUtils';
import PromptConfig from 'YBProject/app/config/PromptConfig';
import StyleUtil from 'YBProject/app/util/StyleUtil';
import Help from '../../main/component/weight/Help';
import { Device } from 'YBProject/app/util/Device';
import Login from './weight/Login';

interface DispatchProps {
    getAccountInfo: () => void
}

interface StateProps {
    isLoading: boolean
}

export interface Props extends StateProps, DispatchProps { }

class Account extends React.PureComponent<Props> {
    render() {
        const { isLoading, getAccountInfo } = this.props
        return (
            <Container>
                <SafeAreaProvider>
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff', flexDirection: "column" }}>
                        <NavigationBar type={navTypes.ACCOUNT} style={{ zIndex: 2, width: CommonStyles.width, height: 44 }} />
                        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} alwaysBounceVertical={true}
                            contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
                            refreshControl={<RefreshControl colors={[CommonStyles.color.black]} tintColor={CommonStyles.color.black} refreshing={isLoading} onRefresh={getAccountInfo} />}
                        >
                            <Login ></Login>
                            <View style={{ alignSelf: "stretch", height: StyleUtil.scale(40), backgroundColor: "#000000",justifyContent:"center" }}>
                                <Text style={{ color: "#ffffff", paddingLeft: StyleUtil.scale(33), fontSize: StyleUtil.scale(14), fontWeight: "500" }}>{PromptConfig.account.PROFILE}</Text>
                            </View>
                            <Item title={PromptConfig.account.ORDER_HISTORY} img={ResourcesUtils.icons.account.orderHistory} onPress={() => {
                                Alert.alert("233")
                            }}></Item>
                            <Item title={PromptConfig.account.SHIPPING_ADDRESS} img={ResourcesUtils.icons.account.shippingAddress} onPress={() => {
                                Alert.alert("233")
                            }}></Item>
                            <Item title={PromptConfig.account.MESSAGE_SETTINGS} img={ResourcesUtils.icons.account.messageSetting} onPress={() => {
                                Alert.alert("233")
                            }}></Item>
                            <View style={{ alignSelf: "stretch", height: StyleUtil.scale(40), backgroundColor: "#000000", justifyContent: "center" }}>
                                <Text style={{ color: "#ffffff", left: StyleUtil.scale(33), fontSize: StyleUtil.scale(14), fontWeight: "500" }}>{PromptConfig.account.LEARN_MORE}</Text>
                            </View>
                            <Item title={PromptConfig.account.FAQS} img={ResourcesUtils.icons.account.faq} onPress={() => {
                                Alert.alert("233")
                            }}></Item>
                            <Item title={PromptConfig.account.TERMS_OF_USE} img={ResourcesUtils.icons.account.term} onPress={() => {
                                Alert.alert("233")
                            }}></Item>
                            <Item title={PromptConfig.account.PRIVACY_POLICY} img={ResourcesUtils.icons.account.privacyPolicy} onPress={() => {
                                Alert.alert("233")
                            }}></Item>
                            <Item title={PromptConfig.account.LOG_OUT} img={ResourcesUtils.icons.account.logOut} onPress={() => {
                                Alert.alert("233")
                            }}></Item>
                            <View style={{alignSelf:"stretch",height:StyleUtil.scale(3),backgroundColor:CommonStyles.color.YBGray}}></View>
                            <Help></Help>
                            <View style={{alignSelf:"stretch",height:StyleUtil.scale(32),backgroundColor:CommonStyles.color.YBGray,justifyContent:"center",alignItems:"center"}}>
                            <Text style={{ color: "#000000", fontSize: StyleUtil.scale(10)}}>{PromptConfig.account.APP_VERSION + Device.version()}</Text>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                </SafeAreaProvider>
            </Container>
        )
    }

}

const mapStateToProps = (state: RootState): StateProps => ({
    isLoading: false
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    getAccountInfo: () => dispatch(AccountActioins.getAllData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);