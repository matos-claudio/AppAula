import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const ExampleFixedDimens = () => {
  return (
    <View>
      <SafeAreaView />
      <View style={[styles.box1, styles.powderBlue]} />
      <View style={[styles.box2, styles.skyBlue]} />
      <View style={[styles.box3, styles.steelBlue]} />
    </View>
  );
};

const styles = StyleSheet.create({
  box1: {
    width: 50,
    height: 50,
  },
  box2: {
    width: 100,
    height: 100,
  },
  box3: {
    width: 150,
    height: 100,
  },
  powderBlue: {
    backgroundColor: 'powderblue',
  },
  skyBlue: {
    backgroundColor: 'skyblue',
  },
  steelBlue: {
    backgroundColor: 'steelblue',
  },
});

export default ExampleFixedDimens;
