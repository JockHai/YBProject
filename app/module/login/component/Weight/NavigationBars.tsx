import React from "react"
import { Image, StyleSheet, View, Text, Alert, ViewStyle } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import CommonStyles from "YBProject/app/config/CommonStyles";
import PromptConfig from "YBProject/app/config/PromptConfig";
import Help from "YBProject/app/module/main/component/weight/Help";
import { TopNav } from "YBProject/app/service/type/api";
import StyleUtil from "YBProject/app/util/StyleUtil";
import Edit, { EditType } from "./Edit";

export interface Props extends ViewStyle {

}

export default class NavigationBars extends React.PureComponent<Props>{
    //点击事件、地下划线变动位置、等分数据
    render() {
        return (
            <View>

            </View>
        )
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
