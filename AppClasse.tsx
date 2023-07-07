import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class AppClasse extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      numeroCliques: 0,
    };
  }

  incrementar = () => {
    this.setState({numeroCliques: this.state.numeroCliques + 1});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>MEU PRIMEIRO APP COM COMPONENTES DE CLASSE</Text>
        <Text>VOCÊ CLICOU {this.state.numeroCliques} VEZES</Text>
        <TouchableOpacity onPress={() => this.incrementar()}>
          <Text>INCREMETAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AppClasse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
