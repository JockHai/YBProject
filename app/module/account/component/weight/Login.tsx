import { uri } from "core-native";
import React from "react"
import { Image, StyleSheet, View, Text, ImageSourcePropType, Alert } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import CommonStyles from "YBProject/app/config/CommonStyles";
import PromptConfig from "YBProject/app/config/PromptConfig";
import { Navigation, ScreenNames } from "YBProject/app/module/Navigation";
import ResourcesUtils from "YBProject/app/resources/ResourcesUtils";
import { TopNav } from "YBProject/app/service/type/api";
import StyleUtil from "YBProject/app/util/StyleUtil";
import Item from "./Item";

export interface Props {
    // onPress: () => void;
    // title: string;
    // img: ImageSourcePropType
}

export default class Login extends React.PureComponent<Props>{

    renderLogin(){
        return(
            <View style={{height:StyleUtil.scale(94),width:CommonStyles.width,flexDirection:"row",alignItems:"center"}}>
                <Image style={{marginLeft:StyleUtil.scale(31),width:StyleUtil.scale(57),height:StyleUtil.scale(57),borderRadius:StyleUtil.scale(28.5)}} source={{uri:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3155998395,3600507640&fm=26&gp=0.jpg'}}></Image>
                <View style={{justifyContent:"center",marginLeft:StyleUtil.scale(19),marginRight:StyleUtil.scale(16),flex:1,height:StyleUtil.scale(94)}}>
                    <Text style={{fontSize:StyleUtil.scale(15)}}>6666</Text>
                    <Text style={{marginTop:StyleUtil.scale(2),marginBottom:StyleUtil.scale(2),fontSize:StyleUtil.scale(13)}}>8888</Text>
                    <Text style={{textDecorationLine:"underline",fontSize:StyleUtil.scale(13)}}>{PromptConfig.account.EDIT_PROFILE}</Text>
                </View>
            </View>
        )
    }

    renderLogout(){
        return (
            [<Item title={PromptConfig.account.SIGN_IN} img={null} onPress={() => {
                Navigation.push(ScreenNames.SignInAndCreate)
            }}></Item>,<Item title={PromptConfig.account.CREATE_ACCOUNT} img={null} onPress={() => {
                Alert.alert("233")
            }}></Item>]
        )
    }


    render() {
        // const { onPress, title, img } = this.props
        return this.renderLogout()
    }
}

const styles = StyleSheet.create({
    imgLeft: {
        height: StyleUtil.scale(48),
        width: StyleUtil.scale(78),
        resizeMode: "center",
    },
    item: {
        height: StyleUtil.scale(86),
        width: StyleUtil.scale(66),
        flexDirection: "column",
        backgroundColor: '#ffffff',
        alignItems: "center"
    },
    title: {
        flex: 1,
        fontSize: StyleUtil.scale(14),
        color: "#000000"
    },
    labGo: {
        marginRight: StyleUtil.scale(18),
        fontSize: StyleUtil.scale(11),
        color: "#000000"
    }
})
