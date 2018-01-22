import React ,{Component} from 'React';
import  {
  AppRegistry ,
  View,
  Text,
  Dimensions,
  StyleSheet,
  ListView,
  Image,
 }from 'react-native';


 // import movieData from '.Wine.json';
 let movieData = require('./Wine.json');
 const ScreenWidth = Dimensions.get('window').width; //屏幕宽
 const ScreenHeight = Dimensions.get('window').height; //高
 const ScreenScale = Dimensions.get('window').scale;//比例




 export default class Destion extends Component {

   constructor(props){
     super(props);

     const ds = new ListView.DataSource({
       rowHasChanged:(r1,r2) => r1!== r2
     });
     // this.state = {
     //   dataSource: ds.cloneWithRows([
     //   {logo:'https://upload.jianshu.io/users/upload_avatars/1716313/17687250-c3ed-4c5d-8652-06bfe2edc8c6.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',name:"用户1"},
     //   {logo:'https://upload.jianshu.io/users/upload_avatars/8820266/c97456eb-fefe-40b1-a2c6-578bfb728a57?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',name:"用户2"},
     //   {logo:'https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png',name:"Demon404"},
     //   {logo:'https://upload.jianshu.io/users/upload_avatars/1716313/17687250-c3ed-4c5d-8652-06bfe2edc8c6.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',name:"用户1"},
     //   {logo:'https://upload.jianshu.io/users/upload_avatars/8820266/c97456eb-fefe-40b1-a2c6-578bfb728a57?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',name:"用户2"},
     //   {logo:'https://upload.jianshu.io/users/upload_avatars/1716313/17687250-c3ed-4c5d-8652-06bfe2edc8c6.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120',name:"用户1"},
     //   {logo:'https://upload.jianshu.io/users/upload_avatars/8820266/c97456eb-fefe-40b1-a2c6-578bfb728a57?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',name:"用户2"},
     //         ])
     // };

     this.state = {
       dataSource: ds.cloneWithRows(movieData.subjects)
     };

   }

  renderCell(model){
    return(
      <View style={styles.CarCell}>
          <View style={styles.ImageView}>
              <Image  style={styles.showImage} source ={{uri:model.images.large}} />
          </View>
          <View style={styles.movieContent}>
              <Text> {model.title}</Text>
              <Text> collect_count:{model.collect_count}</Text>
              <Text> {model.year}</Text>
            <Text> {model.images.large}</Text>
          </View>
      </View>
    );
  }
  /*  */
  componentDidMount(){
    this.getDataFormServer();
  }

  getDataFormServer(){

    fetch('https://api.douban.com/v2/movie/top250')
    .then((response) => response.json())
    .then((responseText) =>{
      console.log(responseText);
      /*请求成功 处理数据*/
      this.setState({

      })
    })
    .catch((error) =>{
      /*处理错误*/
      console.warn(error);
    }).done();

  }
   render() {
     return (
       <View style={styles.backView}>
         <Text style={styles.Title}>目的地</Text>

         <ListView
         // showsVerticalScrollIndicator={false}
         dataSource={this.state.dataSource}
         renderRow={this.renderCell.bind(this)}
        />
       </View>
     );
   }
 }

  /* 在这里创建一个 cell 用于显示 */


 // class CarCell extends Component{
 //   render(){
 //
 //     // console(this.props);
 //     return(
 //       <View style={styles.CarCell}>
 //         <Image  style={styles.showImage} source ={{uri:'https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png'}} />
 //       <Text> xxxx{this.props.name}</Text>
 //       </View>
 //     );
 //   }
 // }





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
   showImage:{
     width:60,
     height:100,
     margin:5,
     // backgroundColor:'red',
   },
   CarCell:{
     height:100,
     alignItems:'center',
     flexDirection:'row',
     borderBottomWidth:0.5,
     borderBottomColor:'gray',
   },
 });
 module.exports = Destion;
