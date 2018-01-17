/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TabBarIOS,
  Dimensions,
} from 'react-native';



const ScreenWidth = Dimensions.get('window').width; //屏幕宽
const ScreenHeight = Dimensions.get('window').height; //高
const ScreenScale = Dimensions.get('window').scale;//比例


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


// 创建一个class 对象
 class Greeting extends Component{
   render(){
     return(
       <Text>{this.props.name}</Text>
     )
   }
 }



export default class App extends Component<{}> {


  render() {
    return (
      <View style={styles.container}>

            <View style={styles.showTop}>
                <Greeting name='测试一下自己封装的-控件'/>
                <Greeting name='能显示出来吗'/>
                <Greeting name='卧槽可以吗'/>
            </View>
            <View style={styles.showTopA}>
                <View style={styles.showTopAItem}></View>
                <View style={styles.showTopAItem}></View>
                <View style={styles.showTopAItem}></View>
            </View>
            <View style={styles.showTopB}>
              <TextInput
                style={{height:40}}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
              />
            </View>
            <View style={styles.showTopC}></View>

        <TabBarIOS
          style={{height:49,width:ScreenWidth}}
          tintColor="green" //被选中的标签的颜色
          barTintColor="black" //tabbarIOS 背景色
          translucent={false}     // TabBarIOS不需要半透明效果
          >
            <TabBarIOS.Item
              systemIcon="bookmarks"
              badge="15"
              title="首页"  //如果是系统图标，则标题不会出现
              //icon={require('.image!home')} //自定义图标- 目前只支持本地图片
              //selectedIcon={require('image!baker')} //自定义高亮图标
              >
            </TabBarIOS.Item>
            <TabBarIOS.Item systemIcon="contacts">
            </TabBarIOS.Item>
            <TabBarIOS.Item systemIcon="downloads">
            </TabBarIOS.Item>
            <TabBarIOS.Item systemIcon="favorites">
            </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  showTop:{
    width:ScreenWidth,
    height:100,
    marginTop:20,
    backgroundColor:'#F5FCF0',
  },
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
  showTopB:{
    flex:2,
    backgroundColor:'steelblue',
  },
  showTopC:{
    flex:3,
    backgroundColor:'red',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
