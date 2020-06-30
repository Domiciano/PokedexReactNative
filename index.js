/**
 * Este es archivo principal.
Las importaciones se pueden hacer usando llaves {} o directamente

La primera importacion llama a la clase AppRegistry que permite crear la aplicacion

La segunda importacion llama a App.js, notar que la extension no se pone

En la tercera importacion, se importa un objeto que esta en app.json
Tener en cuenta que en Javascript los arreglos son [] y los objetos {}

 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name} from './app.json';

AppRegistry.registerComponent(name, () => App);

//En React-native es recomendable usar lambdas para crear funciones
/*
    En lugar de definirlas como:

    miFuncion(){

    }

    Definalas como

    miFuncion = ()=>{
        
    }

 */