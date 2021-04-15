

import React,{FunctionComponent} from 'react';
import 'react-native-gesture-handler';
import { View,StyleSheet,Text, Image, PointPropType, ShadowPropTypesIOS, ViewStyle, ImageSourcePropType } from 'react-native';
import StyleUtil from 'YBProject/app/util/StyleUtil';

interface Props extends ViewStyle {
    iconSource:ImageSourcePropType,
    title:string,
    subTitle:string,
}

const HelpButton:FunctionComponent<Props> = (props:Props)=>{
    return (
        <View style={[props,{flexDirection:"column",alignItems:"center"}]}>
            <Image style={btnStyles.logo} source={props.iconSource} />
            <Text style={btnStyles.txtTitle}>{props.title}</Text>
            <Text style={btnStyles.txtSubTitle}>{props.subTitle}</Text>
        </View>
    ) 
}

export default HelpButton

const btnStyles = StyleSheet.create({
    txtTitle: {
        marginBottom:StyleUtil.scale(5),
        textAlign:"center",
        fontSize:StyleUtil.scale(16),
        lineHeight:StyleUtil.scale(19),
        color:"#5a5a5a",
    },
    txtSubTitle: {
        fontSize:StyleUtil.scale(9),
        color:"#000000",
        marginBottom:StyleUtil.scale(16),
        lineHeight:StyleUtil.scale(11),
        textAlign:"center",
    },
    logo: {
        flex:1,
        marginTop:StyleUtil.scale(20),
        resizeMode:"center",
    }
});