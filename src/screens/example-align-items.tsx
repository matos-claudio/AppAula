import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const ExampleAlignItems = () => {
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: '#6b6b6bed',
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

export default ExampleAlignItems;
