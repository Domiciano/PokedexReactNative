import React, {Component} from 'react';
import { FlatList, TextInput, TouchableOpacity, Button,ScrollView, Text, View, StyleSheet, Image } from 'react-native';
import {styles} from '../styles/styles.js';
import {db} from '../db/DatabaseHandler';



export default class SecondScreen extends Component {

  
   constructor(props){
     super(props);
     this.state = {
       name: "",
       email: "",
       personasList: []
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
    
    //
    

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
  }

  render() {
    return (
        <View style={[styles.container, styles.topMargin]}>

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

        </View>
      
    );
  }
}