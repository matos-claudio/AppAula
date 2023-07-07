/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [numeroCliques, setNumeroCliques] = useState<number>(0);
  const [nome, setNome] = useState<String>('');
  const incrementar = () => {
    setNumeroCliques(numeroCliques + 1);
  };
  const setarNome = () => {
    setNome('Rogerio');
    incrementar();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MEU PRIMEIRO APP</Text>
      <Text>VOCÊ CLICOU {numeroCliques} VEZES</Text>
      <Text>MEU NOME É: {nome}</Text>
      <TouchableOpacity onPress={() => setarNome()}>
        <Text>INCREMETAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    color: 'red',
  },
  botao: {
    backgroundColor: 'red',
    // height: 40;
  },
});
