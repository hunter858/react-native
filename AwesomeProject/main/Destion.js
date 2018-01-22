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
     this.state = {
       dataSource: ds.cloneWithRows([]),
       loaded:false
     };
     this.getDataFormServer();


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
            {/* <Text> {model.images.large}</Text> */}
          </View>
      </View>
    );
  }
  /*  */
  componentDidMount(){
    this.getDataFormServer();
  }


  /*获取网络请求方法*/
  getDataFormServer(){

    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1!== r2
    });


    fetch('https://api.douban.com/v2/movie/top250')
    .then((response) => response.json())
    .then((responseData) =>{

      /*请求成功 处理数据*/
      this.setState({
       dataSource: ds.cloneWithRows(responseData.subjects),
       loaded:true
      })
    })
    .catch((error) =>{
      /*处理错误*/
      console.warn(error);
    }).done();

  }
   render() {

      /* 返回正在加载的属性 */
     if (!this.state.loaded) {
       return (
         <View style={styles.conatiner}>
           <Text style={styles.loading}>加载中...</Text>
         </View>

       );
     }



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
   conatiner:{
    flex:1,
   },
   backView:{
     flex:1,
     marginTop:29,
     backgroundColor:'white',
   },
   loading:{
     fontSize:24,
     textAlign: 'center',
     margin: 10,
     marginTop:150,
   },
   Title:{
     textAlign:'center',
     fontSize:20,
     margin:10,
     marginTop:20,
   },
   CarCell:{
     height:100,
     alignItems:'center',
     flexDirection:'row',
     borderBottomWidth:0.5,
     borderBottomColor:'gray',
   },
   ImageView:{
     width:90,
     height:100,

   },
   showImage:{
     flex:1,
     margin:5,
     // backgroundColor:'red',
   },
 });
 module.exports = Destion;
