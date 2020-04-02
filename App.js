import React, {Component} from 'react';
import { StyleSheet,TouchableOpacity,TextInput, Text, View,ActivityIndicator,Image,FlatList,Platform, Button  } from 'react-native';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      dataSource:[]

     };
   }
   componentDidMount(){
    fetch("http://brayan.desarrolladoresti3b.com/registro2.php")    
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
    userDELETE= () =>{
      const {id} = this.state;
      fetch('http://brayan.desarrolladoresti3b.com/deletebris.php', {
      method: 'post',
      header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
      },
      body:JSON.stringify({
      id: id
      })
      
      })
      .then((response) => response.text())
      .then((responseJson) =>{
      alert(responseJson);
      })
      .catch((error)=>{
      console.error(error);
      }); }
    userRegister = () =>{
      const {Pecera} = this.state;
      const {Modelo} = this.state;
      const {Cantidad} = this.state;
      const {Costo} = this.state;
      fetch('http://brayan.desarrolladoresti3b.com/datosbri.php', {
      method: 'post',
      header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
      },
      
      body:JSON.stringify({
      
      Pecera: Pecera,
      Modelo: Modelo,
      Cantidad: Cantidad,
      Costo: Costo,
      })
      
      })
      
      .then((response) => response.text())
      .then((responseJson) =>{
      alert(responseJson);
      })
      .catch((error)=>{
      console.error(error);
      }); }

  render(){
  return (
    <View style={styles.container}>
      <View style={styles.arriba}>
        <Image source={{ uri: 'https://cuantotiempovive.com/wp-content/uploads/2017/07/cuanto-tiempo-vive-un-pez.jpg' }} 
      style={{ width: 200, height: 200 }}/>
     <View>
     <Text style={styles.text}>La Casa De La Pecera </Text>
     <Text style={styles.text2}> Las Mejores Peceras Que existen</Text>      
     </View>  
      </View>
      <View style={styles.centro}>
     <Image source={{ uri: 'https://i.pinimg.com/originals/e9/04/15/e904152f727d70e777066bd122c7f2dd.gif' }} 
     style={{flex:2}}/> 
           <FlatList  data={this.state.dataSource} renderItem={({item}) => 
            <View >
              <Text style={{height:30,fontSize:20,width:250,left:22}}>ID: {item.id}</Text>
              <Text style={{height:30,fontSize:20,width:250,left:22}}>NOMBRE: {item.Pecera}</Text>
              <Text style={{height:30,fontSize:20,width:250,left:22}}>MODELO: {item.Modelo}</Text>
              <Text style={{height:30,fontSize:20,width:250,left:22}}>CANTIDAD: {item.Cantidad}</Text>
              <Text style={{height:30,fontSize:20,width:250,left:22}}>COSTO: {item.Costo}</Text>
              <View style={{backgroundColor:'blue'}}><Text></Text></View>
            </View>}/>
      </View>
      <View style={styles.abajo} >
      <Text style={styles.text2}>Agregar Pecera</Text>
      <View  style={styles.p}>
      <Text style={styles.text2}>Origen: </Text>   
      <TextInput onChangeText= {Origen => this.setState({Origen})}   style={styles.pa} placeholder='Pecera'/>
      </View>
      <View  style={styles.p}>
      <Text  style={styles.text2}>Ingrese El Modelo De La Pecera: </Text>   
      <TextInput  onChangeText= {Modelo => this.setState({Modelo})}  style={styles.pa} placeholder='Modelo'/>
      </View>
      <View  style={styles.p}>
      <Text style={styles.text2}>Ingrese La Cantidad De las Peceras: </Text>   
      <TextInput onChangeText= {Cantidad => this.setState({Cantidad})}  style={styles.pa}  placeholder='Cantidad'/>
      </View>
      <View  style={styles.p}>
      <Text style={styles.text2}  >Ingrese El Costo De La Pecera: </Text>   
      <TextInput  onChangeText= {Costo => this.setState({Costo})} style={styles.pa} placeholder='Costo'/>
      </View>
      <Button onPress={this.userRegister} title='Guardar'></Button>
      <Text style={styles.text2}  >Eliminar  </Text>   
      <TextInput  onChangeText= {id => this.setState({id})} style={styles.pa} placeholder='INGRESE LA ID'/>
      <Button onPress={this.userDELETE} title='Eliminar'></Button>
      </View> 
    </View>

    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arriba:{
    flex : 1.4,
    top:25,
    flexDirection:'row',
    backgroundColor: '#fdff',
  }, 
   centro:{
    flex : 3,
    flexDirection:'row',
    backgroundColor: '#dfde',
  }, 
   abajo:{
    flex : 3.1,
    backgroundColor: '#0d6bb8',
  }, 
   text:{
    fontSize:40,
    
  },
  text2:{
    fontSize:20,
  },
  p:{
    flexDirection:'row'
  },
  pa:{
    backgroundColor:'#0267ffea',
    fontSize:23
  }


});
