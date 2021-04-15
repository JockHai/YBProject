import React,{FunctionComponent} from 'react';
import 'react-native-gesture-handler';
import { View,StyleSheet,Text } from 'react-native';
import { Dimensions } from 'react-native';
import CommonStyles from 'YBProject/app/config/CommonStyles';
import StyleUtil from 'YBProject/app/util/StyleUtil';
import HelpButton from './HelpButton';
import ResourcesUtils from 'YBProject/app/resources/ResourcesUtils';



 const Help: FunctionComponent = () => {
  return (
    <View style={{width:CommonStyles.width}}>
        <View style={styles.content}>
          <Text style={styles.txtTitle}>Need Help?</Text>
          <View style={styles.viewBottom}>
            <HelpButton flex={1} title='call1' subTitle='000-000-00003' iconSource={ResourcesUtils.icons.help.call} />
            <HelpButton flex={1} title='email' subTitle='hello@yummybazaar.com' iconSource={ResourcesUtils.icons.help.email}/>
            <HelpButton flex={1} title='chat' subTitle='online' iconSource={ResourcesUtils.icons.help.chat}/>
          </View>
        </View>
    </View>
  );
}
export default Help

const styles = StyleSheet.create({
    content: {
      width:Dimensions.get("window").width,
      flexDirection:"column",
      backgroundColor: '#ffffff',
      alignItems:"stretch",
      height:StyleUtil.scale(146)
    },
    txtTitle:{
        fontSize:18,
        textAlign:"center",
        marginTop:10
    },
    viewBottom:{
        flex:1,
        flexDirection:"row",
        alignItems:"stretch"
    }
});
