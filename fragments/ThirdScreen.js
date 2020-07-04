import React, {Component} from 'react';
import { TouchableOpacity, ScrollView, Text, View, StyleSheet, Image } from 'react-native';
import {styles} from '../styles/styles.js';

//Generador de QR gracias a 
//https://github.com/rishichawda/react-native-qrcode-generator#readme
//npx install-peerdeps react-native-qrcode-generator, seleccionar YARN
import QRCode from 'react-native-qrcode-generator';

//Lector de QR gracias a
//https://github.com/moaazsidat/react-native-qrcode-scanner
//Agregar lineas descritas para Android y iOS
//npm install react-native-camera
//react-native link react-native-camera

//npm install react-native-qrcode-scanner
//react-native link react-native-qrcode-scanner

//npm install react-native-permissions
//react-native link react-native-permissions

//"react-native-camera": "^3.31.0",
//"react-native-qrcode-generator": "1.2.2",
//"react-native-qrcode-scanner": "^1.4.1",


import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


export default class ThirdScreen extends Component {
  


  constructor(props){
    super(props);
    this.scanner = {};
  }

  onSuccess = (e)=>{
    alert("Exito: "+e.data);
    //this.scanner.reactivate();
  }

  render() {
    return (
      <ScrollView style={styles.fragment}>
        <View style={[styles.container, styles.topMargin]}>
    
            <QRCode
              value={"Universidad Icesi"}
              size={200}
              bgColor='black'
              fgColor='white'/>

            <QRCodeScanner
              ref={(node) => { this.scanner = node }}
              reactivate = {true}
              reactivateTimeout = {2000}
              onRead={this.onSuccess}
              flashMode={RNCamera.Constants.FlashMode.torch}
              topContent={
                <Text style={styles.centerText}>
                  Camera
                </Text>
              }

            />
        </View>  
      </ScrollView>
    );
  }
}