import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {styles} from '../styles/styles.js'
import First from '../fragments/FirstScreen'
import Second from '../fragments/SecondScreen'
import Third from '../fragments/ThirdScreen'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    





      <Tab.Navigator
          screenOptions={
            ({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'First') {
                iconName = require('../images/qr.png');
              } else if (route.name === 'Second') {
                iconName = require('../images/user.png');
              } else if (route.name === 'Third') {
                iconName = require('../images/verify.png');
              }

            // You can return any component that you like here!
            return (
              <Image
                style={focused?styles.tinyImage:styles.tinyImageSelected}
                source={iconName}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'white',
          },
        }}
        
      >
        <Tab.Screen name="First" component={First} />
        <Tab.Screen name="Second" component={Second} />
        <Tab.Screen name="Third" component={Third} />
      </Tab.Navigator>
    
  );
}