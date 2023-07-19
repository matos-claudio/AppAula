import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const ExampleFlexWrap = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.box, {backgroundColor: 'orangered'}]} />
      <View style={[styles.box, {backgroundColor: 'orange'}]} />
      <View style={[styles.box, {backgroundColor: 'mediumseagreen'}]} />
      <View style={[styles.box, {backgroundColor: 'deepskyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'mediumturquoise'}]} />
      <View style={[styles.box, {backgroundColor: 'mediumslateblue'}]} />
      <View style={[styles.box, {backgroundColor: 'purple'}]} />
      <View style={[styles.box, {backgroundColor: 'yellow'}]} />
      <View style={[styles.box, {backgroundColor: 'green'}]} />

      {/* <View style={styles.row}>
        <View style={[styles.box, {backgroundColor: 'orangered'}]} />
        <View style={[styles.box, {backgroundColor: 'orange'}]} />
        <View style={[styles.box, {backgroundColor: 'mediumseagreen'}]} />
        <View style={[styles.box, {backgroundColor: 'deepskyblue'}]} />
        <View style={[styles.box, {backgroundColor: 'mediumturquoise'}]} />
        <View style={[styles.box, {backgroundColor: 'mediumslateblue'}]} />
        <View style={[styles.box, {backgroundColor: 'purple'}]} />
        <View style={[styles.box, {backgroundColor: 'black'}]} />
        <View style={[styles.box, {backgroundColor: 'white'}]} />
        <View style={[styles.box, {backgroundColor: 'yellow'}]} />
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8132e3',
    maxHeight: 400,
    flexWrap: 'wrap',
    // flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
  },
  box: {
    width: 50,
    height: 50,
  },
});

export default ExampleFlexWrap;
