import React ,{Component} from 'React';
import  {
  AppRegistry ,
  View,
  Text,
  Dimensions,
  StyleSheet,
  ListView,
  Image,
  ActivityIndicator,
  TouchableHighlight,
  TextInput,
 }from 'react-native';

import MovieList from './MovieList.js';

 export default class Search extends Component {
    constructor(props){
      super(props);
      this.state ={
        queryKey:''
      };
    }
    FetchSearchData(){

       let requestURl = "https://api.douban.com/v2/book/search?q='" + this.state.queryKey +"'"
       console.log(this.props.queryKey);
       fetch('https://api.douban.com/v2/movie/top250')
       .then((response) => response.json())
       .then((responseData) =>{


         /*请求成功 处理数据*/
         // this.setState({
         //  dataSource: ds.cloneWithRows(responseData.subjects),
         //  loaded:true
         //  });

          this.props.navigator.push({
            title:responseData.title,
            component:MovieList,
            passProps:{
              results:responseData.subjects
            }
          })

       })
       .catch((error) =>{
         /*处理错误*/
         console.warn(error);
       }).done();



    }




    render(){
      return(
        <View style={styles.conatiner}>
            <View style={styles.searchView}>
              <TextInput
                style={styles.textView}
                placeholder="搜索....."
                placeholderTextColor='#6435c9'
                // autocorrect ={false}
                // editable={false}
                //keyboardType="numeric" //键盘类型 'email-address' 'url' 'web-search'
                //multiline  //是否多行显示
                //clearButtonMode = 'while-editing' //'unless-editing'
                //clearTextOnFocus ={true}
                // enablesReturnKeyAutomatically={true}   // 显示return 按钮
                //autoFocus ={true}
                returnkeyType="send" //'send' 'join'
                onFocus={() => console.log('onFocus')}
                onBlur={() => console.log('onBlur')}
                onChange= {() => console.log('onChange')}
                onChangeText={(text) => {
                    this.setState({
                      queryKey:text
                    });
                    console.log('state:'+this.state);
                    console.log('props:'+this.props);
                }}
                onEndEditing ={()=> console.log('onEndEditing')}
                onSubmitEditing ={()=> {
                  this.FetchSearchData();
                }}

              />
            </View>
        </View>
      );
    }
 }
const ScreenWidth = Dimensions.get('window').width;
 const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    bgView:{
      width:100,
      height:100,
    },
    searchView:{
      marginTop:60,
      height:100,
      width:ScreenWidth,
      borderColor:'rgba(100,53,201,0.1)',
      borderBottomWidth:1,
      // backgroundColor:'blue',
    },
    textView:{
      flex:1,
      paddingTop:8,
      paddingLeft:8,
      height:50,
      // backgroundColor:'red',

    },
 });

 module.exports  = Search;
