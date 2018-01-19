import React ,{Component} from 'React';
import  {
  AppRegistry ,
  View,
  Text,
  Dimensions,
  StyleSheet,
 }from 'react-native';


 import SecondView from './SecondView.js';
 import TopViewB from './TopViewB.js';
 import TopViewC from './TopViewC.js';


 const ScreenWidth = Dimensions.get('window').width; //屏幕宽
 const ScreenHeight = Dimensions.get('window').height; //高
 const ScreenScale = Dimensions.get('window').scale;//比例


 export default class Account extends Component {
   render() {
     return (
       <View style={styles.backView}>
           <Text style={styles.Title}>账户</Text>

          <SecondView />
          <TopViewB />
          <TopViewC />
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   backView:{
     flex:1,
     backgroundColor:'white',
   },
   Title:{
     textAlign:'center',
     fontSize:20,
     margin:10,
     marginTop:20,
   },
 });

 module.exports = Account;
