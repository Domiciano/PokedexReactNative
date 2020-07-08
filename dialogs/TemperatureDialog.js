import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, TextInput, Button, StyleSheet, View } from 'react-native';
import {styles} from '../styles/styles.js';
import { Dialog } from 'react-native-simple-dialogs';

export default class TemperatureDialog extends Component {

  constructor(props){
    super(props);
    this.state={
        temperature: ''
    }
  }

  onValue = (temp) => {
      this.props.onValue(temp); //t => this.setState({temperature: t, temperatureDialogVisible: false})
  }

render() {
    return (
        <Dialog
            visible={this.props.visible}
            onTouchOutside={() => this.onValue(undefined)} 
            keyboardShouldPersistTaps='always'>
            <View style={styles.dialogContainer}>

                <Text style={styles.dialogTitle}>Registra temperatura</Text>
                <Text>Registra la temperatura del visitante</Text>

                <TextInput   
                    style={styles.temperatureTextIntput}
                    placeholder="°C"
                    keyboardType='numeric'
                    value={this.state.temperature}
                    onChangeText={text =>  this.setState({temperature: text}) }
                />

                <TouchableOpacity onPress={() => this.onValue(this.state.temperature)} style={styles.dialogButton}>
                    <Text style={styles.dialogButtonText}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        </Dialog>
      
    );
  }
}