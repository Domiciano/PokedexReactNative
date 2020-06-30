import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//De esta forma se importan componentes creados en otros archivos js
import Login from './components/LoginScreen'
import Main from './components/MainScreen'


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
              name="Main"
              component={Main}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
  }
  
}

/*
  En esta clase se implemento la navegacion react-navigation
  https://reactnavigation.org/
  Esto permite viajar entre "Actividades" o ventanas dentro de la aplicacion

  Cada Actividad o Ventana esta representada con Componentes

  Todos las clases que extienden Component deben tener el metodo render(). El retorno del metodo render es
  la forma como se va a ver el componente.

  El primer componente que se ponga en el stack, va a ser el que primero se muestra

  Cuando esta escribiendo en HTML, es decir, dentro del parentesis del return del metodo render, puede usar
  codigo Javascript encerrando entre llaves como por ejemplo component={Login} 

  Cuando vea doble llave es porque esta insertando un objeto como propiedad al elemento.
  Por ejemplo screenOptions={{headerShown: false}}. Las primeras llaves son para poder escribir en Javascript
  Las segundas son para crear el objeto.

  Importante tener encuenta que cualquier pantalla, view o elemento visual de React es un Component
  De modo que NavigationContainer, Stack.Navigator y Stack.Screen son components



  En el archivo package.json estan todas las dependencias y para agregarlas pueden usar npm o yarn 
 */