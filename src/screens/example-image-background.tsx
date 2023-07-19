import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';

const ExampleImageBackground = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <ImageBackground
        style={styles.container}
        source={require('../../assets/images/wallpaper.jpg')}>
        <Text style={{color: '#FFF'}}>Hora do café</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExampleImageBackground;
