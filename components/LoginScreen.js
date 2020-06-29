import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, TextInput, Button, StyleSheet, View } from 'react-native';
import {styles} from '../styles/styles.js'
import CheckBox from '@react-native-community/checkbox';

export default class LoginScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      count : 1,
      alfa: false,
      input: ""
    }
  }

  onPressButton = () => {
    //this.setState({count : this.state.count + 1})
    //alert("Alfa: "+ this.state.alfa + "\nText: "+this.state.input)
    //this.props.navigation.navigate('Profile')
  }

  onValueChange = ()=>{
    this.setState({alfa: !this.state.alfa})
  }

  onChangeText = (text) => {
    this.setState({input: text})
  }

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

          <Image
            style={[styles.icesiLogo, styles.bottomMargin]}
            source={require('../images/icesi.png')}
          />
          

          <TextInput
            style={styles.basicTextIntput}
            placeholder="Identificación"
            value={this.state.input}
            onChangeText={text => this.onChangeText(text)}
          />  

          <TextInput   
            style={styles.basicTextIntput}
            placeholder="Contraseña"
            value={this.state.input}
            onChangeText={text => this.onChangeText(text)}
          />

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}
            style={[styles.signInButton, styles.topMargin]}>
            <Text style={styles.signInTextButton}>Ingresar</Text>
          </TouchableOpacity>
        
      </View>
    );
  }
}