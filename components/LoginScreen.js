import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, TextInput, Button, StyleSheet, View } from 'react-native';
import {styles} from '../styles/styles.js'
import CheckBox from '@react-native-community/checkbox';




export default class LoginScreen extends Component {

  constructor(props){
    super(props);
    console.log(props);
    this.global = "GLOBAL";
    //El state es una propiedad importante. Aqui debe poner variables que se presenten graficamente
    //Usted puede leerlas desde cualquier punto usando this.state.count por ejemplo
    //Sin embargo si quiere modificar el estado, debe hacerlo usando el metodo
    //this.setState({count: 15}), si quiere por ejemplo modificar el estado count a 15.
    //Esto es muy importante porque al usar this.setState provoca que el componente vuelva a ejecutar el
    //metodo render().

    //El estado me permite representar graficamente algo
    this.state = {
      count : 1,
      alfa: false,
      username: "",
      password: "",
    }
  }

  //Stackoverflow puede salir esto: bind(), pero ya no se usa

  //Los metodos se TIENEN que declarar estilo arrow, para no usar bind()
  onValueChange = ()=>{
    this.setState({alfa: !this.state.alfa})
  }


  //Esta es la notacion oficial para este proyecto
  miFuncion = () => {

  }


  //Con este metodo se puede navegar entre "Actividades"
  //Puede no poner el segundo parametro, pero si se pone
  //Es para enviar datos al otro componente, en este caso Main
  //A la que le estamos enviando this.state.username.
  //La idea es que ese parametro llegue hasta FirstScreen
  
  //LoginScreen -> MainScreen -> FirstScreen

  navigateToProfile = () => {
    //this.setState({username: "Esto es un test"});
    this.props.navigation.navigate('Main', { username: this.state.username });
  }

  //onCreate
  //El tipo del render fuera Component
  render() {
    //const { navigate } = this.props.navigation
    //cajones flex
    //https://reactnative.dev/docs/flexbox
    return (
      <View style={styles.container}>

          <Image
            style={[styles.icesiLogo, styles.bottomMargin]}
            source={require('../images/icesi.png')}
          />
        
          {
            /*
              Este comentario esta entre llaves porque se requieren llaves para incrustar comentarios Javascript.
              Mire los textInput, el valor hace referencia al estado this.state.username
              Sin embargo, sabemos que el estado solo se puede modificar con this.setState
              Por eso al callback llamado onChangeText se usa la varible text otorgada por el evento y con ella
              se cambia el estado usando this.setState, eso provoca que podamos ver el texto escrito cada vez que
              lo modificamos.
             */
          }
          

          <TextInput
            style={styles.basicTextIntput}
            placeholder="Identificación"
            value={this.state.username}
            onChangeText={text => this.setState({username: text}) }
          />  
          {/*Usamos setState para modificar el estado, no lo hacemos manualmente*/}

          <TextInput   
            style={styles.basicTextIntput}
            placeholder="Contraseña"
            value={this.state.password}
            onChangeText={text =>  this.setState({password: text}) }
          />

          {
            /*
              Los bloques Touchable contenedores de otros componentes con clickeabilidad 
              update UI = setState()
             */
          }

          <TouchableOpacity onPress={this.navigateToProfile}
            style={[styles.signInButton, styles.topMargin]}>
            <Text style={styles.signInTextButton}>Ingresar</Text>
          </TouchableOpacity>
        
      </View>
    );
  }
}