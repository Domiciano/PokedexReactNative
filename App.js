import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//De esta forma se importan componentes creados en otros archivos js
import Login from './components/LoginScreen'
import Main from './components/MainScreen'

export default class App extends Component {

  constructor(props){
    super(props);
    console.log(props);
    this.numero = {};
    this.global = "";
  }



  render(){
    const Stack = createStackNavigator();

    //JSX = HTML
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>

            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen
              name="Main"
              component={Main}
            />

          </Stack.Navigator>
        </NavigationContainer>
      );
  }
  
}

