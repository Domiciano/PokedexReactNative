import React, {Component,Suspense, lazy} from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Se puede usar una hoja de estilo para toda la aplicacion e importarla
//de modo que al hacer cambios, se vean reflejados en toda la app.
import {styles} from '../styles/styles.js'



/*

Esta es la forma convencional de importar componentes:

import Third from '../fragments/ThirdScreen'
import First from '../fragments/FirstScreen'
import Second from '../fragments/SecondScreen'

Pero si se quiere cargar estilo lazy loading, además de poner un pequeño mensaje de carga 
mientras el componente se muestra es mejor, porque aporta a la UX.

Las importaciones lazy se hacen asi:
*/

const First = lazy(()=>import('../fragments/FirstScreen'));
const Second = lazy(()=>import('../fragments/SecondScreen'));
const Third = lazy(()=>import('../fragments/ThirdScreen'));

/*
Ese lazy import se complementa con el componente Suspense.
Se encierra el componente importado estilo lazy en el componente Suspense
Se debe definir el fallback que es lo que se va a mostrar mientras se carga
*/


const Tab = createBottomTabNavigator();

export default class MainScreen extends Component{

    //Si esta pasando parametros entre componentes, se requiere las props
    //Simplemente incluyalas en el constructor de la clase y use el superconstructor.

    constructor(props){
      super(props); 
    }

    render(){
      
      /*
        El componente MainScreen devuelve un Tab.Navigator. Esto sirve para hacer
        navegaciones con barra inferior. En las propiedades se definen los iconos que tendran
        Dentro se espeficican las Tab.Screen que son las pantallas de navegacion.

        Como se esta haciendo la carga lazy, se usa el bloque <Suspense>
        Las imagenes se importan asi:
        require('../images/qr.png');

        el primer punto representa la carpeta actual, un segundo punto representa la carpeta padre

      */
      
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
        }}>

        {
          /* 
            Note que First, Second y Third son componentes importados.
            Cualquier componente (que extiende a Component), se puede escribir en modo 
            HTML. Tambien se les puede asignar propiedades.

            En este caso le vamos a asignar la propiedad username que recibimos de LoginScreen (ver archivo)
            Para obtener ese paramtro recibido se hace con this.props.route.params.username.

            La idea es que el parametro que nos envia Login Screen pase a firstScreen
            Pero este componente es un host de Fragments.
            
            LoginScreen -> MainScreen -> FirstScreen

            se llama username porque asi se envio desde LoginScreen.

            Mire FirstScreen para saber como se lee esa propiedad
          */
        }

        <Tab.Screen name="First">
          {() => <Suspense fallback={<Text>Loading...</Text>}><First userName={this.props.route.params.username}/></Suspense>}
        </Tab.Screen>
        <Tab.Screen name="Second">
          {() => <Suspense fallback={<Text>Loading...</Text>}><Second/></Suspense>}
        </Tab.Screen>
        <Tab.Screen name="Third">
          {() => <Suspense fallback={<Text>Loading...</Text>}><Third/></Suspense>}
        </Tab.Screen>
      </Tab.Navigator>  
    );
  }    
}
/* 
  Cuando se hace un lazy loading, se debe encerrar el componente en los tags <Suspense>
  Alli se usa la propiedad fallback para poner lo que se quiere mostrar mientras carga
  el componente
         
*/