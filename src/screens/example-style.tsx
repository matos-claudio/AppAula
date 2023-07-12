import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const ExampleStyle = () => {
  return (
    <View>
      <SafeAreaView />
      <Text style={styles.text1}>Texto 1</Text>
      <Text style={styles.text2}>Texto 2</Text>
      <Text style={styles.text3}>Texto 3</Text>
      <Text style={styles.text4}>Texto 4</Text>
      <Text style={styles.text5}>Texto 5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 20,
    margin: 10,
    color: '#256ec7',
  },
  text2: {
    fontSize: 22,
    marginTop: 10,
    marginLeft: 30,
    color: 'green',
  },
  text3: {
    fontSize: 24,
    padding: 40,
    color: '#ff0e92',
  },
  text4: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 45,
    color: '#052d03',
  },
  text5: {
    fontSize: 28,
    marginLeft: 35,
    fontStyle: 'italic',
  },
});

export default ExampleStyle;
