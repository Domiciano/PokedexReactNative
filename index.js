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
import {db} from './db/DatabaseHandler';


//Soportar las dos plataformas puede requerir desactivar los warnigns. Por ejemplo, al probarlo en iOS
//Hay un warning, pero al testear cada función, todo funciona perfecto. El warning es que hay una imagen que 
//el sistema de react no pudo cargar del emulador y no la encuetra, pero no es una imagen que se involucre
//en el proyecto:

//console.disableYellowBox = true;

/*
    Crear tablas al inicio de la aplicacion.
    Notese que el objeto db es sacado del import, en el fichero db/DatabaseHandler.js
 */
db.execute("CREATE TABLE IF NOT EXISTS personas (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR, email VARCHAR)");


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