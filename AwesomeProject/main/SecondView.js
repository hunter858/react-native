import React ,{Component} from 'React';
import  {
  AppRegistry ,
  View,
  Text,
  Dimensions,
  StyleSheet,
 }from 'react-native';

 const ScreenWidth = Dimensions.get('window').width; //屏幕宽
 const ScreenHeight = Dimensions.get('window').height; //高
 const ScreenScale = Dimensions.get('window').scale;//比例


 export default class SecondView extends Component {
   render() {
     return (
       <View style={styles.showTopA}>
           <View style={styles.showTopAItem}></View>
           <View style={styles.showTopAItem}></View>
           <View style={styles.showTopAItem}></View>
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   showTopA:{
     flex:1,
     backgroundColor:'powderblue',
     flexDirection: 'row',//行
     // flexDirection: 'column',//竖着展示
     justifyContent:'space-between',//均分分布---center  居中显示，设置的margin 起作用
     alignItems: 'center',
   },
   showTopAItem:{
     width:50,
     height:50,
     margin:5,
     backgroundColor: 'white',
   },
 });
 module.exports = SecondView;
