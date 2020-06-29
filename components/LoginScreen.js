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
      username: "",
      password: "",
    }
  }

  onValueChange = ()=>{
    this.setState({alfa: !this.state.alfa})
  }

  navigateToProfile = () => {
    this.props.navigation.navigate('Profile', { username: this.state.username });
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
            value={this.state.username}
            onChangeText={text => this.setState({username: text}) }
          />  

          <TextInput   
            style={styles.basicTextIntput}
            placeholder="Contraseña"
            value={this.state.password}
            onChangeText={text =>  this.setState({password: text}) }
          />

          <TouchableOpacity onPress={this.navigateToProfile}
            style={[styles.signInButton, styles.topMargin]}>
            <Text style={styles.signInTextButton}>Ingresar</Text>
          </TouchableOpacity>
        
      </View>
    );
  }
}