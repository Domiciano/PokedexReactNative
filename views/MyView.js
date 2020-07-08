import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, TextInput, Button, StyleSheet, View } from 'react-native';
import {styles} from '../styles/styles.js';

export default class MyView extends Component {

  constructor(props){
    super(props);
  }

render() {
    return (
      <View style={styles.container}>
        <Text>            
            {this.props.macAddress}
        </Text>


        <TouchableOpacity onPress={this.props.showMacAction}
            style={[styles.signInButton]}>
            <Text style={styles.signInTextButton}>Mostrar</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}