import React ,{Component} from 'React';
import  {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ListView,
  Image,
  ActivityIndicator,
  TouchableHighlight,
 }from 'react-native';

 export default class  MovieDetail   extends Component {
  constructor(props){
    super(props);
    this.state= {
      movieDetail:''
    };
    let movieID = this.props.movie.id;
    let MovieDetail_URL = 'https://api.douban.com/v2/movie/subject/'+movieID;
    this.sendRequest(MovieDetail_URL);

  }
  sendRequest(requestUrl){

     console.log(requestUrl);
      fetch(requestUrl)
      .then((response) => response.json())
      .then((responseData) =>{

        /*请求成功 处理数据*/
        this.setState({
         movieDetail:responseData
        })
      })
      .catch((error) =>{
        /*处理错误*/
        console.warn(error);
      }).done();

  }


   render(){

     // let movie = this.state.movieDetail;
     // let summary = movie.summary.split(/\n/).map(p =>{
     //
     //   return(
     //     <View style={[{marginBottom:15,paddingLeft:6,paddingRight:6},styles.itemText]}>
     //       <Text>{p}</Text>
     //     </View>
     //   );
     // });




    return(
      <View style={styles.container}>
        <View  style={styles.MovieContent}>
          <Text>标题:{this.state.movieDetail.title}</Text>
        <Text style={styles.itemText}>{this.state.movieDetail.summary}</Text>

        {/* {summary} */}
        </View>
      </View>
    );
   }

 }

const styles = StyleSheet.create({
  conatiner:{
   // flex:1,
  },
  red:{
    width:100,
    height:100,
    backgroundColor:'red',
  },
  itemText:{
    fontSize:16,
    fontFamily:'Helvetica Neue',
    fontWeight:'300',
    color:'rgba(0,0,0,0.8)',
    padding:10,
    lineHeight:26,
  },
  MovieContent:{

    flexDirection:'column',
    marginTop:60,
    padding:10,
  },
  loading:{
    // color:'red',
    // marginTop:200,
    // flex:1,
    // justifyContent:'center',
    // alignItems:'center'
    marginTop:300,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

 module.exports = MovieDetail;
