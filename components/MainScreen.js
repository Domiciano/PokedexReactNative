/*This is an Example to make a View Like Android Fragment in React Native*/
import React, {Component, Suspense, lazy} from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {styles} from '../styles/styles.js';

/*
import FirstScreen from '../fragments/FirstScreen';
import SecondScreen from '../fragments/SecondScreen';
import ThirdScreen from '../fragments/ThirdScreen';
*/






const FirstScreen = lazy(()=>import('../fragments/FirstScreen'));
const SecondScreen = lazy(()=>import('../fragments/SecondScreen'));
const ThirdScreen = lazy(()=>import('../fragments/ThirdScreen'));


export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    //state to manage the screen visible at a time
    this.state = { val: 1 };
  }


  renderElement() {
    if (this.state.val === 1) {
      return (
          <Suspense fallback={<Text>Loading...</Text>}>
            <FirstScreen/>
          </Suspense>
        );
    } else if (this.state.val === 2) {
      return (
        <Suspense fallback={<Text>Loading...</Text>}>
          <SecondScreen/>
        </Suspense>
        );
    } else {
      return (
        <Suspense fallback={<Text>Loading...</Text>}>
          <ThirdScreen/>
        </Suspense>
        );
    }
  }

  

  render() {
    return (
      <View style={styles.container}>


        <View style={styles.fragmentContainer}>
          {this.renderElement()}
        </View>

        <View style={styles.bottomBar}>
          
          <TouchableOpacity
            onPress={() => this.setState({ val: 1 })}>
            <Image 
              style={this.state.val==1?styles.barButtonSelected:styles.barButton} 
              source={require('../images/qr.png')}
            />
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => this.setState({ val: 2 })}>
            <Image 
              style={this.state.val==2?styles.barButtonSelected:styles.barButton} 
              source={require('../images/user.png')}
            />
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => this.setState({ val: 3 })}>
            <Image 
              style={this.state.val==3?styles.barButtonSelected:styles.barButton} 
              source={require('../images/verify.png')}
            />
          </TouchableOpacity>

        </View>


      </View>
    );
  }
}