import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/LoginScreen'
import Profile from './components/ProfileScreen'

export default class App extends Component {

  

  render(){
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
  }
  
}