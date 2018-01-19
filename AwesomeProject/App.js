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



import Home from './main/Home.js';

const ScreenWidth = Dimensions.get('window').width; //屏幕宽
const ScreenHeight = Dimensions.get('window').height; //高
const ScreenScale = Dimensions.get('window').scale;//比例


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});






export default class App extends Component<{}> {


  render() {
    return (
        <Home  style={styles.container}/>
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
  MainView:{
    flex:1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  itemImage:{
    height:100,
    width:100,
  },
  showTop:{
    width:ScreenWidth,
    height:100,
    marginTop:20,
    backgroundColor:'#F5FCF0',
  },
  scrollview:{
    flexDirection:'row',
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
