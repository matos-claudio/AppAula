import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const ExamplePercentageDimens = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  box1: {
    height: '15%',
    backgroundColor: 'powderblue',
  },
  box2: {
    height: '60%',
    backgroundColor: 'skyblue',
  },
  box3: {
    height: '25%',
    backgroundColor: 'steelblue',
  },
});

export default ExamplePercentageDimens;
