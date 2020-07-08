import React, {Component} from 'react';
import { Alert, FlatList, TextInput, TouchableOpacity, Button,ScrollView, Text, View, StyleSheet, Image } from 'react-native';
import {styles} from '../styles/styles';
import {db} from '../db/DatabaseHandler';
import MyView from '../views/MyView';
import TemperatureDialog from '../dialogs/TemperatureDialog';

//Sacado de:
//https://www.npmjs.com/package/react-native-device-info?activeTab=versions
//Aunque en la guia no lo dice, hay que adicionar el permiso al manifest.xml de Android:
//<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
import DeviceInfo from 'react-native-device-info';



export default class SecondScreen extends Component {

  
   constructor(props){
     super(props);
     this.state = {
       name: "",
       email: "",
       personasList: [],
       mac: "",
       temperatureDialogVisible:false,
       temperature: 0
     }
   }

  

  addDataToDb = () => {
    //Con comilla de lado, se puede concatenar mas facil los string
    db.execute(
      `INSERT INTO personas(name, email) values ('${this.state.name}', '${this.state.email}')`
    );

    this.showInfo();
    
  };

  showInfo = () => {
    db.query(
      "SELECT * FROM personas",
      (tx, results) => {
        console.log("Query completed: "+JSON.stringify(results));
        var len = results.rows.length;

        var personas = [];
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);

          //El parametro key de las listas se requiere. Ademas es necesario que sea string
          //Por eso se concatena con un ''.
          let persona = {key:''+row.id, name:row.name, email:row.email};
          console.log(`Name: ${row.name}, Email: ${row.email}`);
          personas.push(persona);
        }

        //MUY IMPORTANTE!!: Eviten hacer un setState en un for. Ya saben que setState
        //Provoca que se vuelva a renderizar el componente
        this.setState( {personasList: personas} ) ;
      }
    );

  
    

  }

  rowRender = ({item}) => {
    return (
      <View style={styles.rowList}>
      <Text>{item.key}.</Text>
        <Text>{item.name} ====> </Text>
        <Text>{item.email}</Text>
      </View>
    );
  };


  componentDidMount() {  
    this.showInfo();
    this.getMac();
  }

  getMac = ()=>{
    DeviceInfo.getMacAddress().then(mac => {
      this.setState({mac: mac});
    });


  }

  showDialog = ()=>{
    this.setState({temperatureDialogVisible: true});
  }

  showMac = ()=>{
    alert(this.state.mac);
  }



  render() {
    return (
        <View style={[styles.container, styles.topMargin]}>

          
          <MyView macAddress={this.state.mac} showMacAction={() => this.showMac()}/>

          
          <Text>{this.state.temperature} grados</Text>
          <Button title='Cambiar temperatura' onPress={this.showDialog}></Button>

          <TextInput   
            style={styles.basicTextIntput}
            placeholder="Nombre"
            value={this.state.name}
            onChangeText={text =>  this.setState({name: text}) }
          />

          <TextInput   
            style={styles.basicTextIntput}
            placeholder="Email"
            value={this.state.email}
            onChangeText={text =>  this.setState({email: text}) }
          />

          <TouchableOpacity style={styles.signInButton} onPress={this.addDataToDb}>
          <Text style={styles.signInTextButton}>Agregar a DB</Text>
          </TouchableOpacity>

          <FlatList
            style={{width:'100%'}}
            data={this.state.personasList}
            renderItem={ this.rowRender }
          />

          <TemperatureDialog 
              visible={this.state.temperatureDialogVisible} 
              onValue={t => this.setState({temperature: t?t:this.state.temperature, temperatureDialogVisible: false})} 
          />

        </View>
      
    );
  }
}