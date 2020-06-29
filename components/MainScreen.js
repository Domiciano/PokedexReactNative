import React, {Component,Suspense, lazy} from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {styles} from '../styles/styles.js'




//Esta es la forma convencional de importar componentes, pero si se quiere cargar
//estilo lazy loading, además de poner un pequeño mensaje de carga mientras el componente se muestras
//es mejor, porque aporta a la UX.

//import Third from '../fragments/ThirdScreen'
//import First from '../fragments/FirstScreen'
//import Second from '../fragments/SecondScreen'

//Las importaciones lazy se hacen asi:
const First = lazy(()=>import('../fragments/FirstScreen'));
const Second = lazy(()=>import('../fragments/SecondScreen'));
const Third = lazy(()=>import('../fragments/ThirdScreen'));



const Tab = createBottomTabNavigator();

export default class MainScreen extends Component{

    //Se requiere para obtener las variables enviadas
    constructor(props){
      super(props);
      
    }

    render(){
      //Recibir los parametros que enviando al momento de navegar
      
      
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

        <Tab.Screen name="First">
          {() => <Suspense fallback={<Text>Loading...</Text>}><First userName={this.props.route.params.username}/></Suspense>}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => <Suspense fallback={<Text>Loading...</Text>}><Second/></Suspense>}
        </Tab.Screen>
        <Tab.Screen name="Third">
          {() => <Suspense fallback={<Text>Loading...</Text>}><Third/></Suspense>}
        </Tab.Screen>

        {

          /* 
          Cuando se hace un lazy loading, se debe encerrar el componente en los tags <Suspense>
          Alli se usa la propiedad fallback para poner lo que se quiere mostrar mientras carga
          el componente
          */
          
          /* 
          Los Screens tambien puede ponerse usando
          <Tab.Screen name="Second" component={Second}/>
          */
        }

      </Tab.Navigator>  
    );
  }
    
  
    
}