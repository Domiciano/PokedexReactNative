import React, {Component} from 'react';
import { ScrollView, Text, View, StyleSheet, Image } from 'react-native';
import {styles} from '../styles/styles.js';

export default class SecondScreen extends Component {
  

  componentWillUnmount () {
    
  }

  render() {
    return (
      <ScrollView style={styles.fragment}>
        <View style={styles.fragmentContent}>
          <Text>Segunda pantalla</Text>
        </View>
      </ScrollView>
    );
  }
}