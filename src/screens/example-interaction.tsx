import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const ExampleInteraction = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Button
        title="Pressione"
        onPress={() => Alert.alert('Ola', 'Você clicou no Button')}
      />

      <TouchableHighlight
        onPress={() => Alert.alert('Olá', 'Você clicou no TouchableHighlight')}>
        <View style={styles.button}>
          <Text style={styles.label}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>

      <TouchableNativeFeedback
        onPress={() => console.log('Você clicou no TouchableNativeFeedback')}>
        <View style={styles.touchable}>
          <Text style={styles.text}>TouchableNativeFeedback</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableOpacity
        style={styles.touchableOpacity}
        activeOpacity={0.8}
        onPress={() => Alert.alert('Olá', 'Você clicou no TouchableOpacity')}>
        <Text style={{color: '#FFF'}}>TouchableOpacity</Text>
        {/* <ActivityIndicator size={'large'} color={'#000'} /> */}
      </TouchableOpacity>

      <TouchableWithoutFeedback
        style={styles.touchableWithoutFeedback}
        onPress={() =>
          Alert.alert('Ola', 'Você clicou no TouchableWithoutFeedback')
        }>
        <View
          style={{backgroundColor: 'blue', padding: 10, alignItems: 'center'}}>
          <Text style={{color: '#FFF'}}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10,
  },
  label: {
    color: '#FFF',
  },
  touchable: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  text: {
    alignSelf: 'center',
  },
  touchableOpacity: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'red',
  },
  touchableWithoutFeedback: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'skyblue',
  },
});

export default ExampleInteraction;
