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



 // var CarData = require('.Wine.json');
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
       dataSource: ds.cloneWithRows([
       {logo:'http://upload.jianshu.io/users/upload_avatars/2781235/52637b2553b5.PNG?imageMogr/thumbnail/90x90/quality/100',name:"Demon404"},
       {logo:'http://upload.jianshu.io/users/upload_avatars/2781235/52637b2553b5.PNG?imageMogr/thumbnail/90x90/quality/100',name:"Demon404"},
       {logo:'http://upload.jianshu.io/users/upload_avatars/2781235/52637b2553b5.PNG?imageMogr/thumbnail/90x90/quality/100',name:"Demon404"},
             ])
         };

   }




   render() {
     return (
       <View style={styles.backView}>
         <Text style={styles.Title}>目的地</Text>

         <ListView
         showsVerticalScrollIndicator={false}
         dataSource={this.state.dataSource}
         renderRow={(rowData,rowId) => <CarCell source={{uri:rowData.logo,title:rowData.name}} />}
        />
       </View>
     );
   }
 }

  /* 在这里创建一个 cell 用于显示 */


 class CarCell extends Component{
   render(){

     // console(this.props);
     return(
       <View style={styles.CarCell}>
         <Image  style={styles.showImage}source ={this.props.uri} />
       <Text>{this.props.title}</Text>
       </View>
     );
   }
 }





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
     width:40,
     height:40,
     margin:5,
     backgroundColor:'red',
   },
   CarCell:{
     height:64,
     alignItems:'center',
     flexDirection:'row',
     borderBottomWidth:0.5,
     borderBottomColor:'gray',
   },
 });
 module.exports = Destion;
