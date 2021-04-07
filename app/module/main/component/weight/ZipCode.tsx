import React from "react"
import { Image, StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CommonStyles from "YBProject/app/config/CommonStyles";
import ResourcesUtils from "YBProject/app/resources/ResourcesUtils";
import { TopNav } from "YBProject/app/service/type/api";
import StyleUtil from "YBProject/app/util/StyleUtil";

export interface Props {
    
}

export default class ZipCode extends React.PureComponent<Props> {

    render() {
        return (
            <View style={{ flexDirection:"row",alignItems:"center",backgroundColor: '#DBDEE0', height: StyleUtil.scale(37), width: CommonStyles.width }}>
                <Image source={ResourcesUtils.icons.mainZipcodeLocation} style={{marginLeft:StyleUtil.scale(12),width:StyleUtil.scale(17.2),height:StyleUtil.scale(17.2),resizeMode:"contain"}}></Image>
                <Text style={{marginLeft:StyleUtil.scale(15),fontSize:StyleUtil.scale(15)}}>Deliver to </Text>
                <Text style={{fontWeight:"500",fontSize:StyleUtil.scale(15),textDecorationLine:"underline",textDecorationStyle:"solid"}}>10001</Text>
            </View>
        )
    }
}

