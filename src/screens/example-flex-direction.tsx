import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const ExampleFlexDirection = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, styles.powderBlue]} />
      <View style={[styles.box, styles.skyblue]} />
      <View style={[styles.box, styles.steelblue]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: 'grey',
  },
  box: {
    width: 50,
    height: 50,
  },
  powderBlue: {
    backgroundColor: 'powderblue',
  },
  skyblue: {
    backgroundColor: 'skyblue',
  },
  steelblue: {
    backgroundColor: 'steelblue',
  },
});

export default ExampleFlexDirection;
