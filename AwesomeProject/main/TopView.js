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


// 创建一个class 对象
 class Greeting extends Component{
   render(){
     return(
       <Text>{this.props.name}</Text>
     )
   };
 }

export default class TopView extends Component {
  render() {
    return (
      <View style={styles.showTop}>
          <Greeting name='测试一下自己封装的-控件'/>
          <Greeting name='能显示出来吗'/>
          <Greeting name='卧槽可以吗'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  showTop:{
    flex:1,
    width:ScreenWidth,
    height:50,
    marginTop:20,
    backgroundColor:'#F5FCF0',
  },
});
module.exports = TopView;
