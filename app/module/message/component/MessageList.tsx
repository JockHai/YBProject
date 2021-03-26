import { StackScreenProps } from "@react-navigation/stack"
import { Button, Container, View } from "native-base"
import React from "react"
import { SafeAreaView, Text } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { SearchCustomerMessageResponse$Message } from "YBProject/app/service/type/api"
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
    render() {
        const { messages, page_index, total_page, loadAll, loadMessageList } = this.props;
        return (
            <Container>
                <SafeAreaProvider>
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff', flexDirection: "column" }}>
                        <Button style={{ flexDirection: "row", margin: 8 }} onPress={() =>
                            Navigation.goBack()
                        }><Text style={{ flex: 1, textAlign: "center" }}>Back</Text></Button>
                        <Button style={{ flexDirection: "row", margin: 8 }} onPress={() =>
                            loadMessageList(0, 20)
                        }><Text style={{ flex: 1, textAlign: "center" }}>LoadInfo</Text></Button>
                        <Text>{page_index}-{"\n" + total_page}-{"\n" + messages}</Text>
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