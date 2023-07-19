import React from 'react';
import {Image, Platform, SafeAreaView, StyleSheet, Text} from 'react-native';

const ExampleImages = () => {
  const ICON =
    Platform.OS === 'android'
      ? require('../../assets/images/android-os.png')
      : require('../../assets/images/mac-os.png');

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image1} source={ICON} />
      <Image
        style={[styles.image2, {alignSelf: 'center'}]}
        source={{uri: 'https://reactjs.org/logo-og.png'}}
      />
      <Image
        style={{
          width: 51,
          height: 51,
          resizeMode: 'contain',
        }}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image1: {
    alignSelf: 'center',
  },
  image2: {
    width: 200,
    height: 200,
  },
});

export default ExampleImages;
