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
  ScrollView,
  Image,
} from 'react-native';


import Bananas from './Bananas.js';
// import TopView from './main/TopView.js';
import SecondView from './SecondView.js';
import TopViewB from './TopViewB.js';
import TopViewC from './TopViewC.js';

import Destion from './Destion.js';
import Account from './Account.js';
import Message from './Message.js';


const ScreenWidth = Dimensions.get('window').width; //屏幕宽
const ScreenHeight = Dimensions.get('window').height; //高
const ScreenScale = Dimensions.get('window').scale;//比例


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});






export default class Home extends Component {
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
        selectedTab:2 //,     // 首选页面
        // isHiddenTabBar:false,   // 是否隐藏tabBar
        // cnbadgeText:'',         // 首页Item角标文本
        // usbadgeText:''          // 海淘Item角标文本
    };
  }





  render() {
    return (
      <View style={styles.container}>




        {/* <TopView />
        <SecondView />
        <TopViewB />
        <Bananas />
        <TopViewC /> */}


        <TabBarIOS
          style={{height:49,width:ScreenWidth}}
          tintColor="green" //被选中的标签的颜色
          barTintColor="white" //tabbarIOS 背景色
          translucent={false}     // TabBarIOS不需要半透明效果
          >
            <TabBarIOS.Item
              systemIcon="bookmarks"
              badge="15"
              title="首页"  //如果是系统图标，则标题不会出现
              //icon={require('.image!home')} //自定义图标- 目前只支持本地图片
              //selectedIcon={require('image!baker')} //自定义高亮图标
              /*下面歇一些 点击select 的动作*/
              onPress={() => {this.setState({selectedTabItem:0})}}
              selected={this.state.selectedTabItem == 0}
              >
                <View  style={[styles.childView,{backgroundColor:'yellow'}]}></View>

            </TabBarIOS.Item>
            <TabBarIOS.Item systemIcon="contacts"    onPress={() => {this.setState({selectedTabItem:1})}}
                            selected={this.state.selectedTabItem == 1}>
              <Destion />
            </TabBarIOS.Item>
            <TabBarIOS.Item systemIcon="downloads"   onPress={() => {this.setState({selectedTabItem:2})}}
                            selected={this.state.selectedTabItem == 2} >
              <Message />
            </TabBarIOS.Item>
            <TabBarIOS.Item systemIcon="favorites"    onPress={() => {this.setState({selectedTabItem:3})}}
                            selected={this.state.selectedTabItem == 3}>
              <Account />
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
  scrollview:{
    flexDirection:'row',
  },
  childView:{
    flex:1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
module.exports  = Home;
