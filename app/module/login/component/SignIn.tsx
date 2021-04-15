
import React from 'react'
import { RootState } from 'YBProject/app/type/state';
import { Dispatch } from "redux"
import { connect } from "react-redux"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { Container, View } from "native-base"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Alert, DeviceEventEmitter, Image, NativeScrollEvent, NativeSyntheticEvent, RefreshControl, SafeAreaView, StyleSheet, Text } from "react-native"
import { NavigationBar, navTypes } from 'YBProject/app/widget/NavigationBar';
import CommonStyles from 'YBProject/app/config/CommonStyles';
import ResourcesUtils from 'YBProject/app/resources/ResourcesUtils';
import PromptConfig from 'YBProject/app/config/PromptConfig';
import StyleUtil from 'YBProject/app/util/StyleUtil';
import Help from '../../main/component/weight/Help';
import { Device } from 'YBProject/app/util/Device';
import Login from './Weight/Login';
import Create from './Weight/Create';

interface DispatchProps {

}

interface StateProps {

}

interface State {
    lastPostion:number

}

export interface Props extends StateProps, DispatchProps { }

class SignIn extends React.PureComponent<Props,State> {

    constructor(props:Props){
        super(props)
        this.state = {
            lastPostion:0
        }
    }

    render() {
        return (
            <Container>
                <SafeAreaProvider>
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff', flexDirection: "column" }}>
                        <NavigationBar type={navTypes.SIGN_IN} style={{ zIndex: 2, width: CommonStyles.width, height: 44 }} />
                        <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }} alwaysBounceVertical={false}
                            contentContainerStyle={{ justifyContent: "center"}} scrollEventThrottle={60}
                            pagingEnabled={true} horizontal={true} onScroll={this.onScrollContent}
                        >
                            <Login></Login>
                            <Create></Create>
                        </ScrollView>
                    </SafeAreaView>
                </SafeAreaProvider>
            </Container>
        )
    }

    onScrollContent = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        let contentOffset = event.nativeEvent.contentOffset;
        let viewSize = event.nativeEvent.layoutMeasurement;
        // if (contentOffset.y > 85) {
            // if ((contentOffset.y - this.state.lastPostion) > 85) {
            //     if (!this.state.showNav){
            //         this.setState({
            //             lastPostion:contentOffset.y
            //         });
            //     }else{
            //         this.setState({
            //             showNav:false,
            //             lastPostion:contentOffset.y
            //         });
            //     }
            // }else if ((this.state.lastPostion - contentOffset.y) > 85) {
            //     if (this.state.showNav){
            //         this.setState({
            //             lastPostion:contentOffset.y
            //         });
            //     }else{
            //         this.setState({
            //             showNav:true,
            //             lastPostion:contentOffset.y
            //         });
            //     }
            // }
        // }else{
        //     this.setState({
        //         showNav:true,
        //         lastPostion: contentOffset.y < 0 ? 0 : contentOffset.y
        //     });
        // }
    }

}

const mapStateToProps = (state: RootState): StateProps => ({

});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);