import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const ExamplePosition = () => {
  const POSITION = 'absolute';
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.box,
          {top: 50, left: 50, backgroundColor: 'aliceblue', position: POSITION},
        ]}
      />
      <View
        style={[
          styles.box,
          {top: 75, left: 75, backgroundColor: 'skyblue', position: POSITION},
        ]}
      />
      <View
        style={[
          styles.box,
          {top: 100, left: 100, backgroundColor: 'skyblue', position: POSITION},
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  box: {
    width: 50,
    height: 50,
  },
});

export default ExamplePosition;
