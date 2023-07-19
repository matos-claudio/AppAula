import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const ExampleArea = () => {
  const ABSOLUTE = 'absolute';
  const RELATIVE = 'relative';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex2}>
        <View
          style={[
            styles.box,
            {
              top: 50,
              left: 50,
              backgroundColor: 'aliceblue',
              position: ABSOLUTE,
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {top: 75, left: 75, backgroundColor: 'skyblue', position: ABSOLUTE},
          ]}
        />
        <View
          style={[
            styles.box,
            {
              top: 100,
              left: 100,
              backgroundColor: 'skyblue',
              position: ABSOLUTE,
            },
          ]}
        />
      </View>
      <View style={styles.flex1}>
        <View
          style={[
            styles.box,
            {
              top: 50,
              left: 50,
              backgroundColor: 'aliceblue',
              position: RELATIVE,
            },
          ]}
        />
        <View
          style={[
            styles.box,
            {top: 75, left: 75, backgroundColor: 'skyblue', position: RELATIVE},
          ]}
        />
        <View
          style={[
            styles.box,
            {
              top: 100,
              left: 100,
              backgroundColor: 'skyblue',
              position: RELATIVE,
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#611515',
  },
  flex1: {
    flex: 0.6,
    backgroundColor: 'red',
  },
  flex2: {
    flex: 1,
    backgroundColor: 'blue',
  },
  box: {
    width: 50,
    height: 50,
  },
});

export default ExampleArea;
