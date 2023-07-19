import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const ExampleAlignContent = () => {
  return (
    <SafeAreaView style={[styles.container, styles.align]}>
      <View style={[styles.box, {backgroundColor: 'black'}]} />
      <View style={[styles.box, {backgroundColor: 'blue'}]} />
      <View style={[styles.box, {backgroundColor: 'mediumseagreen'}]} />
      <View style={[styles.box, {backgroundColor: 'deepskyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'mediumturquoise'}]} />
      <View style={[styles.box, {backgroundColor: 'black'}]} />
      <View style={[styles.box, {backgroundColor: 'mediumslateblue'}]} />
      <View style={[styles.box, {backgroundColor: 'purple'}]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    maxHeight: 400,
    flexWrap: 'wrap',
  },
  align: {
    // alignContent: 'flex-start',
    // alignContent: 'center',
    // alignContent: 'space-around',
    // alignContent: 'space-between',
    alignContent: 'flex-end',
  },
  box: {
    width: 50,
    height: 50,
  },
});

export default ExampleAlignContent;
