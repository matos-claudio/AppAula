import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const ExampleFlexDimens = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.container1} />
      <View style={styles.container2} />
      <View style={styles.container3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  container2: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  container3: {
    flex: 3,
    backgroundColor: 'steelblue',
  },
});

export default ExampleFlexDimens;
