import React ,{Component} from 'React';
import  {
  AppRegistry ,
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
 }from 'react-native';

 const ScreenWidth = Dimensions.get('window').width; //屏幕宽
 const ScreenHeight = Dimensions.get('window').height; //高
 const ScreenScale = Dimensions.get('window').scale;//比例


 export default class TopViewC extends Component {
   render() {
     return (
       <View style={styles.showTopC}  >
         <ScrollView style={styles.scrollview}
           horizontal={true} //水平显示
           scrollEnabled={true} //允许滚动
           pagingEnabled={true} //显示滚动条
           > 

            <Image style={styles.itemImage} source={require('../img/cat.png')} />
            <Image style={styles.itemImage} source={require('../img/dog.png')} />
            <Image style={styles.itemImage} source={require('../img/dog2.png')} />
            <Image  style={styles.itemImage} source={require('../img/girl.png')} />
            <Image style={styles.itemImage} source={require('../img/cat.png')} />
            <Image style={styles.itemImage} source={require('../img/dog.png')} />
            <Image style={styles.itemImage} source={require('../img/dog2.png')} />
            <Image  style={styles.itemImage} source={require('../img/girl.png')} />
         </ScrollView>

       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   scrollview:{
     flexDirection:'row',
   },
   showTopC:{
     flex:3,
     backgroundColor:'red',
     height:60,

   },
   itemImage:{
     height:100,
     width:100,
   },
 });
 module.exports = TopViewC;
