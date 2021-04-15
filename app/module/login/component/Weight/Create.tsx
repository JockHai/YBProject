import React from "react"
import { Image, StyleSheet, View, Text, Alert, Switch } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import CommonStyles from "YBProject/app/config/CommonStyles";
import PromptConfig from "YBProject/app/config/PromptConfig";
import Help from "YBProject/app/module/main/component/weight/Help";
import { TopNav } from "YBProject/app/service/type/api";
import StyleUtil from "YBProject/app/util/StyleUtil";
import Edit, { EditType } from "./Edit";

export interface Props {

}

export interface State {
    switchValue: boolean
}

export default class Create extends React.PureComponent<Props, State>{

    constructor(props: Props) {
        super(props)
        this.state = {
            switchValue: true
        }
    }

    editEmial: Edit | null = null
    editPass: Edit | null = null

    render() {
        return (
            <ScrollView alwaysBounceVertical={true} contentContainerStyle={{ justifyContent: "center" }}>
                <View style={styles.content} >
                    <Edit title="Email" ref={(ref) => {
                        this.editEmial = ref
                    }} marginTop={StyleUtil.scale(40)} width={CommonStyles.width - StyleUtil.scale(40)} height={StyleUtil.scale(50)} type={EditType.Email} isRequire={true}></Edit>
                    <Edit title="Password" ref={(ref) => {
                        this.editPass = ref
                    }} width={CommonStyles.width - StyleUtil.scale(40)} height={StyleUtil.scale(50)} type={EditType.PassWord} isRequire={true}></Edit>
                    <View style={{ flexDirection: "row", width: CommonStyles.width - StyleUtil.scale(40), marginTop: StyleUtil.scale(13), height: StyleUtil.scale(30), alignItems: "center", justifyContent: "center" }}>
                        <Switch style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }, { translateX: StyleUtil.scale(-8) }] }}
                            onValueChange={(value) => {
                                this.setState({
                                    switchValue: !this.state.switchValue
                                })
                            }}
                            value={this.state.switchValue}
                        />
                        <Text style={{ fontSize: StyleUtil.scale(12), flex: 1 }}>{PromptConfig.login.RECEIVE_NOTICE}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { }} style={{ marginTop: StyleUtil.scale(47), width: StyleUtil.scale(202), borderRadius: StyleUtil.scale(22.5), height: StyleUtil.scale(45), backgroundColor: "#000000", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "#ffffff", fontSize: StyleUtil.scale(13) }}>{PromptConfig.login.CREATE_ACCOUNT}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => { }} style={{ marginTop: StyleUtil.scale(36) }}>
                        <Text style={{ textDecorationLine: "underline", color: "#000", fontSize: StyleUtil.scale(14) }}>{PromptConfig.login.BACK}</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: "center", flexDirection: "row", width: CommonStyles.width - StyleUtil.scale(40), marginTop: StyleUtil.scale(24) }}>
                        <Text style={{ fontSize: StyleUtil.scale(10), color: "#000000" }}>By logging in you agree to the </Text>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                            <Text style={{ fontSize: StyleUtil.scale(10), textDecorationLine: "underline", color: "#0063D0" }}>Terms and conditions</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: StyleUtil.scale(10) }}> and</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { }}>
                        <Text style={{ fontSize: StyleUtil.scale(10), color: "#0063D0", textDecorationLine: "underline", marginTop: StyleUtil.scale(6) }}>Privacy Policy</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: StyleUtil.scale(5), backgroundColor: CommonStyles.color.YBGray }} />
                <Help></Help>
            </ScrollView>
        )
    }

    showInfo() {
        if (this.editEmial !== null) {
            Alert.alert(this.editEmial.result.content)
        }
    }

}

const styles = StyleSheet.create({
    content: {
        height: StyleUtil.scale(420),
        width: CommonStyles.width - StyleUtil.scale(40),
        backgroundColor: '#ffffff',
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
    }
})
