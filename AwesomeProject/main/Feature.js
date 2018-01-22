
import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,
  Dimensions,
  NavigatorIOS,
  Image,
} from 'react-native';

import Destion  from './Destion.js';
import MovieList from './MovieList.js';

export default class Feature extends Component {
    render(){
      return(
        <NavigatorIOS
          style={styles.conatiner}
          initialRoute={{
          title:'推荐电影',
          component: MovieList
          }}
          shadowHidden= "true"
          barTintColor = "darkslateblue"
          titleTextColor="white"
          translucent="true"
        ></NavigatorIOS>
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
});

module.exports = Feature;
