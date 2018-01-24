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
 }from 'react-native';


 // import movieData from '.Wine.json';
  let movieData = require('./Wine.json');
  import MovieDetail from './MovieDetail.js';

  const ScreenWidth = Dimensions.get('window').width; //屏幕宽
  const ScreenHeight = Dimensions.get('window').height; //高
  const ScreenScale = Dimensions.get('window').scale;//比例




 export default class MovieList extends Component {

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

  showMovieDetail(movie){
    console.log(movie);
    this.props.navigator.push({
      title:movie.title,
      component:MovieDetail,
      passProps:{movie},
    });
  }

  renderCell(model){
    return(
      <TouchableHighlight
        underlayColor="rgba(34,26,38,0.1)"
        onPress ={() => this.showMovieDetail(model)}
        >
            <View style={styles.CarCell}>
                <View style={styles.ImageView}>
                    <Image  style={styles.showImage} source ={{uri:model.images.large}} />
                </View>
                <View style={styles.movieContent}>
                    <Text style={styles.titleLabel}> {model.title}   </Text>
                    <Text> collect_count:{model.collect_count}</Text>
                    <Text> {model.year}</Text>
                </View>
            </View>
    </TouchableHighlight>
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

           <ActivityIndicator
              // animating={this.state.animating}
              style={[styles.centering, {height: 80}]}
              size="large"
            />
         </View>

       );
     }



     return (
       <View style={styles.conatiner}>
         <ListView style={styles.tableView}
         // showsVerticalScrollIndicator={false}
         dataSource={this.state.dataSource}
         renderRow={this.renderCell.bind(this)}
        />
       </View>
     );
   }
 }




 const styles = StyleSheet.create({
   conatiner:{
    flex:1,
   },
   backView:{
     // paddingTop:50,
    flex:1,
    backgroundColor:'#F5FCF0',
   },
   tableView:{
     marginTop:60,
     marginBottom:49,
   },
   centering:{
     flex:1,
     alignItems:'center',
     justifyContent:'center',
   },
   loading:{
     fontSize:24,
     textAlign: 'center',
     margin: 10,
     marginTop:150,
   },
   movieContent:{
     marginTop:10,
     marginBottom:10,
   },
   titleLabel:{
     fontSize:22,
     marginTop:10,

   },
   CarCell:{
     height:150,
     alignItems:'center',
     flexDirection:'row',
     borderBottomWidth:0.5,
     borderBottomColor:'gray',
     borderColor:'rgba(100,53,201,0.1)',
     paddingTop:6,
   },
   ImageView:{
     margin:5,
     marginLeft:10,
     height:130,
     width:100,

   },
   showImage:{
     flex:1,
   },
 });
 module.exports = MovieList;
