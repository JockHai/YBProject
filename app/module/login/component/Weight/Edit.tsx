import React from "react"
import { Image, StyleSheet, View, Text, TextInput, ViewStyle, Animated, Button, Easing, NativeSyntheticEvent, TextInputFocusEventData, Alert, KeyboardTypeOptions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import CommonStyles from "YBProject/app/config/CommonStyles";
import PromptConfig from "YBProject/app/config/PromptConfig";
import ResourcesUtils from "YBProject/app/resources/ResourcesUtils";
import { TopNav } from "YBProject/app/service/type/api";
import StyleUtil from "YBProject/app/util/StyleUtil";

export enum EditType {
    Email = "EMAIL",
    Phone = "PHONE",
    PassWord = "PASSWORD",
    Text = "TEXT",
}

export interface Props extends ViewStyle {
    type: EditType,
    title?: string,
    isRequire: boolean,
}

//用于刷新页面
interface State {
    showInput: boolean,
    noticeInfo: string,
    secureTextEntry?:boolean,
}

export default class Edit extends React.PureComponent<Props, State>{

    constructor(props: Props) {
        super(props)
        this.state = {
            showInput: false,
            noticeInfo: "",
            secureTextEntry: props.type === EditType.PassWord ? true : undefined
        }
        if (props.isRequire) {
            this.result.isEnable = false
        }
    }

    //用于暂存数据
    result = {
        content: "",
        isEnable:true
    }

    heightY = new Animated.Value(0)//位置偏移动画

    txtInput: TextInput | null = null

    

    changeHeight = () => {
        Animated.timing(this.heightY, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.ease
        }).start();
        this.setState({
            showInput: true,
        })
    };

    render() {
        const { title, type, isRequire, ...props } = this.props
        let heightP = StyleUtil.scale(40)
        if (typeof (props.height) === "number") {
            heightP = props.height
        }
        let keyType:KeyboardTypeOptions = "default"
        switch (type) {
            case EditType.Email:
                keyType = "email-address"
                break
            case EditType.PassWord:
                keyType = "default"
                break
            case EditType.Phone:
                keyType = "decimal-pad"
                break
        }
        const lineColor = this.txtInput !== null ? (this.result.content.length > 0 ? "#E9E9E9" :  "#ee653e") : "#E9E9E9"
        return (
            <View style={[props, { flexDirection: "column", justifyContent: "center", backgroundColor: "#ffffff" }]}>
                <TouchableOpacity onPress={this.changeHeight}>
                    <Animated.View style={{
                        width: props.width, alignItems: "center", flexDirection: "row"
                        , transform: [
                            {
                                translateY: this.heightY.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -heightP / 2 + StyleUtil.scale(12)]
                                })
                            },
                        ]
                    }}>
                        <Text style={{ fontSize: StyleUtil.scale(14), color: "#000000" }} >{title ? title : ""}</Text>
                        <Text style={{ fontSize: StyleUtil.scale(12), color: "rgba(0, 0, 0, 0.2)" }} >{isRequire ? " (Required)" : ""}</Text>
                        <Text style={{ textAlign: "right", flex: 1, fontSize: StyleUtil.scale(10), color: "#ee653e" }} >{this.state.noticeInfo}</Text>
                    </Animated.View>
                </TouchableOpacity>
                {this.state.showInput ? 
                <View style={{left:0,right:0,top:14,alignItems:"center",position:"absolute",flexDirection:"row",height:heightP - StyleUtil.scale(14)}}>
                    <TextInput secureTextEntry={this.state.secureTextEntry} keyboardType={keyType} onChangeText={(value)=>{this.onChangeTextE(value)}} onEndEditing={() => this.onEndEditingE()} ref={ref => { this.txtInput = ref }} clearButtonMode={'always'} autoFocus={true} 
                    style={{ flex:1,fontSize: StyleUtil.scale(14), height: heightP - StyleUtil.scale(14) }}></TextInput> 
                    {this.state.secureTextEntry !== undefined ? 
                    <TouchableOpacity activeOpacity={1} onPress={()=>{
                        this.setState({
                            secureTextEntry:!this.state.secureTextEntry
                        })
                    }} style={{width:StyleUtil.scale(40),backgroundColor:"#ffffff",alignItems:"center",justifyContent:"center"}}>
                        <Text style={{fontSize:StyleUtil.scale(13)}}>{this.state.secureTextEntry? "Show":"Hide"}</Text>
                    </TouchableOpacity> : null}
                </View>
                : null}
                <View style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: StyleUtil.scale(1), backgroundColor: lineColor }}></View>
            </View>
        )
    }

    onChangeTextE(text: string){
        this.result.content = text
    }

    onEndEditingE() {
        const { isRequire, type } = this.props
        let noticeInfo = ""
        if (this.txtInput !== null) {
            if (isRequire && this.result.content.trim().length <= 0) {
                noticeInfo = PromptConfig.edit.CANT_BE_BLANK
                this.setState({
                    noticeInfo: noticeInfo
                })
                return
            }


            
        }
        this.setState({
            noticeInfo: noticeInfo
        })
    }

}

const styles = StyleSheet.create({
    content: {

    },
})
