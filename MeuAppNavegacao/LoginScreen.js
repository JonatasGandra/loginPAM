import React from 'react';
import { View, Button, TextInput, Text, Alert, StyleSheet, Dimensions } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Usuário e senha fixosr
  const validUsername = 'jota';
  const validPassword = '12345';

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (username === validUsername && password === validPassword) {
      navigation.replace('Home'); // Navega para a tela "Home" se as credenciais estiverem corretas
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    width: Dimensions.get('window').width * 0.8,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
