import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { TextInput } from 'react-native-paper';

import { CalculadoraIMC } from './components/CalculadoraIMC'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      imc: '',
    };
  }

  calculaIMC = ({peso, altura}) => {
    let pesoT = parseInt(peso);
    let alturaT = parseInt(altura);
    let imcT = pesoT / alturaT**2;
    this.actualizarIMC(this.state.imc);
  }

  actualizarIMC = (imcVal) => {
    this.setState({imc: imcVal});
}

  render() {
    return (
      <View>
        <CalculadoraIMC imcCompleto={this.calculaIMC}></CalculadoraIMC>
        <Text value={this.state.imc}></Text>
      </View>
    );
  }
}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    //backgroundColor: 'red',
//  },
//  
//});