import React from "react"
import { Image, StyleSheet, View, Text, Alert } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import CommonStyles from "YBProject/app/config/CommonStyles";
import PromptConfig from "YBProject/app/config/PromptConfig";
import Help from "YBProject/app/module/main/component/weight/Help";
import { TopNav } from "YBProject/app/service/type/api";
import StyleUtil from "YBProject/app/util/StyleUtil";
import Edit, { EditType } from "./Edit";

export interface Props {

}

export default class Login extends React.PureComponent<Props>{

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
                    <Text style={{ alignSelf: "flex-start", marginTop: StyleUtil.scale(8), textDecorationLine: "underline", fontSize: StyleUtil.scale(14) }}>{PromptConfig.login.FORGOT_PASSWORD}</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => { this.showInfo() }} style={{ marginTop: StyleUtil.scale(47), width: StyleUtil.scale(149), borderRadius: StyleUtil.scale(22.5), height: StyleUtil.scale(45), backgroundColor: "#000000", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "#ffffff", fontSize: StyleUtil.scale(13) }}>{PromptConfig.login.LOGIN}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => { }} style={{ marginTop: StyleUtil.scale(36) }}>
                        <Text style={{ textDecorationLine: "underline", color: "#000", fontSize: StyleUtil.scale(14) }}>{PromptConfig.login.BACK}</Text>
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
