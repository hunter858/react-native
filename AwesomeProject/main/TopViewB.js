import React ,{Component} from 'React';
import  {
  AppRegistry ,
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Image,
 }from 'react-native';

 const ScreenWidth = Dimensions.get('window').width; //屏幕宽
 const ScreenHeight = Dimensions.get('window').height; //高
 const ScreenScale = Dimensions.get('window').scale;//比例


 export default class TopViewB extends Component {
   render() {
     return (
       <View style={styles.showTopB}>
         <TextInput
           style={{height:40}}
           placeholder="Type here to translate!"
           onChangeText={(text) => this.setState({text})}
         />
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   showTopB:{
     flex:2,
     backgroundColor:'steelblue',
   },
 });
 module.exports = TopViewB;
