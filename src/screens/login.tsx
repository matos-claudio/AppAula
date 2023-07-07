import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Login = () => {
  // criando nossos states
  const [user, setUser] = useState<String>('');
  const [password, setPassword] = useState<String>('');

  const login = () => {
    Alert.alert('Atenção', `Ola ${user}, sua senha ${password}`);
  };

  // Componente filho
  const MyComponent = ({myUser, myPassword}) => (
    <View>
      <Text>Nome: {myUser}</Text>
      <Text>Senha: {myPassword}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.title}>Seja bem vindo</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Digite seu usuário"
        onChangeText={setUser}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Digite a sua senha"
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={login}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      <MyComponent myUser={user} myPassword={password} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 10,
    borderRadius: 8,
  },
});
