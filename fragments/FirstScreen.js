import React, {Component} from 'react';
import { ScrollView, FlatList, TextInput, Button, Text, View, StyleSheet, Image } from 'react-native';
import {styles} from '../styles/styles.js';
import CheckBox from '@react-native-community/checkbox';

export default class FirstScreen extends Component {

  constructor(props){
    //Las variables globales se definen en el constructor
    super(props)
    this.state = {
      pokemonName : "",
      url : "#",
      pokemonID : "",
      pokemonList : []
    }
    //No todas las variables deben ir en state. Si no hacen parte de la UI, pero si se requieren
    //Use el constructor para definirlas. Estas son las variables globales.
    //No se pueden declarar por fuera de aqui.
    this.pokemon = null;
  }


  //Las funciones HTTP se hacen con fetch. Tener encuenta que este metodo devuelve una promesa
  //Si no sabe que son los promesas lean esto:
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Usar_promesas

  initPokemonList(){
    fetch('https://pokedex-e7321.firebaseio.com/pokemones.json')
    .then( (response) => response.json() )
    .then((json) => {
      if(json === null){
        return;
      }
      
      var pokemones=[];
      Object.entries(json).forEach(([id, value]) => {
        let pokeId = id;
        let pokeName = value.forms[0].name;
        let url = value.sprites.front_default;
        let pokeObj = {key:pokeId, name:pokeName, url:url};
        pokemones.push(pokeObj);
      });

      //IMPORTANTE!!!!. Eviten hacer un setState dentro de un for.
      //Para evitar que renderize el componente en cada ciclo.
      //Lastimosamente el render() se hace mucho mas lento que con un Adapter nativo.
      this.setState( {pokemonList: pokemones} ) ;
      
      
    })
    .catch((error) => {
      alert('Verifique su conexión a internet')
    });
  }

  getPokemon = ()=>{ 
    if(this.state.pokemonID.trim() === ''){ 
      alert('Debe escribir un numero o un nombre');
      return;
    }
    fetch('https://pokeapi.co/api/v2/pokemon/'+this.state.pokemonID)
    .then((response) => {
      if(response.ok){
        return response.json();
      }else{
        throw new Error('El pokemon requerido no existe');
      }
    })
    .then((json) => {
      this.pokemon = json;
      this.setState({pokemonName : json.forms[0].name})
      this.setState({url : json.sprites.front_default})
    })
    .catch((error) => {
      alert(error);
      console.log(error);
    });
  }

  postPokemon = ()=>{
    fetch('https://pokedex-e7321.firebaseio.com/pokemones.json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.pokemon)
    })
    .then( (response) => response.json() )
    .then((json) => {
      console.log(json.name);  
      let pokeObj = {key: json.name, name:this.pokemon.forms[0].name, url:this.pokemon.sprites.front_default};
      this.addPokemonToList(pokeObj);
    })
    .catch((error) => {
      alert('Verifique su conexión a internet')
    });
    
  }

  deleteAllPokemons = () => {
    fetch('https://pokedex-e7321.firebaseio.com/pokemones.json', {
      method: 'DELETE'
    })
    .then(
      (response)=>this.setState( {pokemonList: []} )
    )
    .catch(
      (error) => alert('No se puede eliminar, verifique su conexión a internet')
    );
     
  }

  //Si representan alguna lista y la tienen en el state. 
  //Esta es la forma correcta de agregar a la lista que esta dentro del state.

  addPokemonToList(pokeObj){
    var newArray = [pokeObj, ...this.state.pokemonList];
    this.setState( {pokemonList: newArray} ) ;
  }

  //Si requiren separar la logica en algun momento para retornar un componente
  //React infiere que es un componente cuando retornan HTML

  rowRender = ({item}) => {
    return (
      <View style={styles.rowList}>
        <Image style={ {width:100, height:100} } source={ {uri: item.url} }/>
        <Text>{item.name}</Text>
      </View>
    );
  };
  

  /*
    El metodo componentDidMount es un metodo del ciclo de vida y sucede asi
    componentDidMount -> render -> componentWillUnMount
    Aunque hay mas metodos

    Este metodo es adecuado para llamar funciones por unica vez. No se recomienda
    que las funciones iniciales se pongan en el render porque al usar setState, dichas funciones 
    tambien van a ser llamadas.
   */

  //1. PASO 1
  componentDidMount() {  
    /*
      Este es el primer metodo en ejecutarse

      Este parametro se envio desde LoginScreen -> MainScreen -> FirstScreen
      Solo se debe buscar en el objeto de propiedades del componente.
    */

    console.log(this.props.username);
    this.initPokemonList();
  }

  //2. PASO 2
  render() {
      return (
      <View style={styles.container}>

          <View style={[styles.row, styles.topMargin]}>

            <TextInput
              style={[styles.basicTextIntput]}
              placeholder="Escribe el nombre o ID del Pokemon"
              value={this.state.pokemonID}
              onChangeText={text => {this.setState({pokemonID:text})}}
            />
            <Button
              onPress={this.getPokemon}
              title="Consultar"
              color="#841584"
            />

          </View>

          <View style={[styles.allBorders, styles.topMargin]}>
            <Image
              style={[styles.squareImage]}
              source={ {uri: this.state.url} }
            />
          </View>
          <Text>{this.state.pokemonName}</Text>

          <View style={[styles.row]}>
            <Button
                onPress={this.postPokemon}
                title="Capturar Pokemon"
                color="#841584"
            />
            <Button
                onPress={this.deleteAllPokemons}
                title="Eliminar todo"
                color="#841584"
            /> 
          </View>

          <FlatList
            style={{width:'100%'}}
            data={this.state.pokemonList}
            renderItem={ this.rowRender }
          />
      </View>
    );
  }
}




