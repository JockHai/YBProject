import { uri } from "core-native"
import { Button, Container, View } from "native-base"
import React from "react"
import { Dimensions, Image, SafeAreaView, Text } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { connect, DispatchProp } from "react-redux"
import { Dispatch } from "redux"
import ResourcesUtils from "../../../resources/ResourcesUtils"
import { RootState } from "../../../type/state"
import { Navigation, ScreenNames } from "../../Navigation"
import { actions as MainActions } from "../index"

interface StateProps {
    shouldShowUpdateDialog: boolean;
}

interface DispatchProps {
    changeButtonValue: () => void;
}

export interface Props extends StateProps, DispatchProps { }

class AppMain extends React.PureComponent<Props> {

    render() {
        const { shouldShowUpdateDialog, changeButtonValue } = this.props;
        return (
            <Container>
                <SafeAreaProvider>
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff', flexDirection: "column" }}>
                        <Button style={{ flexDirection: "row", margin: 8 }} onPress={() =>
                            changeButtonValue()
                        }><Text style={{ flex: 1, textAlign: "center" }}>{shouldShowUpdateDialog ? "True" : "False"}</Text></Button>
                        <Image source={require("../../../resources/icons/main_favorite_sel.png")} style={{ width: 80, height: 80, marginTop: 30 }} />
                        {/* <Image source={{uri:"https://reactjs.org/logo-og.png"}} resizeMode="center" style={{ width: 400, height: 400, marginTop: 30 }} /> */}
                        <Text>123</Text>
                        <Button style={{ flexDirection: "row", margin: 8 }} onPress={() =>
                            Navigation.push(ScreenNames.ProductDetail)
                        }><Text style={{ flex: 1, textAlign: "center" }}>ProductDetail</Text></Button>

                        <Button style={{ flexDirection: "row", margin: 8 }} onPress={() =>
                            Navigation.push(ScreenNames.MessageList)
                        }><Text style={{ flex: 1, textAlign: "center" }}>MessageList</Text></Button>
                    </SafeAreaView>
                </SafeAreaProvider>
            </Container>
        )
    }

}

const mapStateToProps = (state: RootState): StateProps => ({
    shouldShowUpdateDialog: state.app.main.shouldShowUpdateDialog,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    changeButtonValue: () => dispatch(MainActions.showUpdateDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMain);