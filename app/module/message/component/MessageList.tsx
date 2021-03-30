import { StackScreenProps } from "@react-navigation/stack"
import { Exception, NetworkConnectionException } from "core-native"
import { Button, Container, View } from "native-base"
import React from "react"
import { SafeAreaView, Text } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { SearchCustomerMessageResponse$Message } from "YBProject/app/service/type/api"
import { APIException } from "YBProject/app/type/network"
import { Device } from "YBProject/app/util/Device"
import { RouteParamsList } from "../../../type/routeParams"
import { RootState } from "../../../type/state"
import { Navigation, ScreenNames } from "../../Navigation"
import { actions as MessageListActions } from "../index"

interface StateProps {
    messages: SearchCustomerMessageResponse$Message[]
    page_index: number
    total_page: number
    loadAll: boolean
}

interface DispatchProps {
    loadMessageList: (page_index: number, page_size: number) => void,
}

export interface Props extends DispatchProps, StateProps { }

class MessageList extends React.PureComponent<Props> {
    timeOut(ms: number) {
        return new Promise((resolve) => {
            console.log("do something")
            return
        })
    }

    async waitConsole(ms: number) {
        await this.timeOut(ms)
        console.log("you are 666")
    }

    render() {
        this.waitConsole(1500)
        const { messages, page_index, total_page, loadAll, loadMessageList } = this.props;
        return (
            <Container>
                <SafeAreaProvider>
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff', flexDirection: "column" }}>
                        <Button style={{ flexDirection: "row", margin: 8 }} onPress={() =>
                            Navigation.goBack()
                        }><Text style={{ flex: 1, textAlign: "center" }}>Back</Text></Button>
                        <Button style={{ flexDirection: "row", margin: 8 }} onPress={() => {
                            // for(let _ of [1,2,3,4,5,6,7,8,9,10]){
                                loadMessageList(0, 20);
                            // }
                        }
                        }><Text style={{ flex: 1, textAlign: "center" }}>LoadInfo</Text></Button>
                        <Text>{page_index}-{"\n" + total_page}-{"\n" + messages}</Text>
                        <Text>{Device.applicationName()}</Text>
                    </SafeAreaView>
                </SafeAreaProvider>
            </Container>
        )
    }
}

const mapStateToProps = (state: RootState): StateProps => ({
    messages: state.app.messagelist.messages,
    page_index: state.app.messagelist.page_index,
    total_page: state.app.messagelist.total_page,
    loadAll: state.app.messagelist.loadAll
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    loadMessageList: (page_index: number, page_size: number) => dispatch(MessageListActions.loadMessageList(page_index, page_size)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);


// let p = new Promise((resolve, reject) => {
        //     setTimeout(() => {
                // 走catch
                // try {
                //     throw new Error('Ouch')
                //     console.log(6666)
                // }catch(e){
                //     reject(e)
                //     console.log(5555)
                // }

                // 走catch
                // reject(new Error('Ouch'))

                // 不走catch
                // throw new Error('Ouch');
        //     }, 1000);
        // })
        // p.then((_) => console.log(_)).catch((e) => {
        //     console.log(e)
        // })
        // Promise.reject(new Error("233")).then((_) => console.log(_)).catch((e) => {
        //     console.log(e)
        // })