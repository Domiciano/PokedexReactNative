import React, { Component } from 'react';
import { FlatList, Image, Text, TextInput, Button, StyleSheet, View } from 'react-native';
import {styles} from '../styles/styles.js'
import CheckBox from '@react-native-community/checkbox';

export default class ProfileScreen extends Component {

  constructor(props){
    //Las variables globales se definen en el constructor
    super(props)
    this.state = {
      pokemonName : "",
      url : "#",
      pokemonID : "",
      pokemonList : []
    }
    this.pokemon = null;
  }

  getPokemon = ()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/'+this.state.pokemonID)
    .then((response) => response.json())
    .then((json) => {
      this.pokemon = json;
      this.setState({pokemonName : json.forms[0].name})
      this.setState({url : json.sprites.front_default})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  addPokemonToList(pokeObj){
    var newArray = [pokeObj, ...this.state.pokemonList];
    this.setState( {pokemonList: newArray} ) ;
  }

  initPokemonList(){
    fetch('https://pokedex-e7321.firebaseio.com/pokemones.json')
    .then( (response) => response.json() )
    .then((json) => {
      Object.entries(json).forEach(([key, value]) => {
        let name = value.forms[0].name;
        let url = value.sprites.front_default;
        let pokeObj = {key:name, url,url};
        this.addPokemonToList(pokeObj);
      });
      
      
    })
    .catch((error) => {
      console.error(error);
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
    });
    let pokeObj = {key:this.pokemon.forms[0].name, url:this.pokemon.sprites.front_default};
    this.addPokemonToList(pokeObj);
  }

  rowRender = ({item}) => {
    return (
      <View style={styles.rowList}>
        <Image style={ {width:100, height:100} } source={ {uri: item.url} }/>
        <Text>{item.key}</Text>
      </View>
    );
  };
  

  //CILCO DE VIDA****

  componentDidMount() {  
    this.initPokemonList();
  }


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
          <Button
              onPress={this.postPokemon}
              title="Capturar"
              color="#841584"
          />
          
          

          <FlatList
            style={{width:'100%'}}
            data={this.state.pokemonList}
            renderItem={ this.rowRender }
          />
      </View>
    );
  }
}
