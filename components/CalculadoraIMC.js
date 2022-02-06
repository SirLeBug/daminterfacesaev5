import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

export default class CalculadoraIMC extends Component {
    constructor(props){
      super(props);
      this.state = {
        peso: '',
        altura: '',
      };
    }

    actualizarPeso = (pesoVal) => {
        this.setState({peso: pesoVal});
    }

    actualizarAltura = (alturaVal) => {
        this.setState({altura: alturaVal});
    }

    padreCallback = () => {
        this.props.imcCompleto(peso: peso, altura: altura);
    }

    render() {
        return (
          <View>
            <View style={{ flexDirection: 'row'}}>
              <Text>PESO</Text>
              <TextInput
                placeholder='Introduce tu peso en kilos'
                keyboardType = 'numeric'
                //underlineColorAndroid='blue'
                value={this.state.peso}
                onChangeText={this.actualizarPeso.bind(this,val)}
              />
              <Text>ALTURA</Text>
              <TextInput
                placeholder='Introduce tu altura en metros'
                keyboardType = 'numeric'
                //underlineColorAndroid='blue'
                value={this.state.altura}
                onChangeText={this.actualizarAltura.bind(this,val)}
              />
              <Button onPress={this.padreCallback}>Calcular IMG</Button>
            </View>
          </View>
        );
      }
}  