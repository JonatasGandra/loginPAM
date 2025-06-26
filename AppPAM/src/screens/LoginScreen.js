import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import { setState } from '../utils/allUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
  const [usu, setUsu] = useState('');
  const [sn, setSn] = useState('');closedcd
  const [mensagemErro, setMensagemErro] = useState('');

  // ✅ Verificar se o usuário já está logado
  useEffect(() => {
    const verificarLoginSalvo = async () => {
      try {
        const value = await AsyncStorage.getItem('in');
        console.log('Valor salvo:', value);
        if (value === 'true') {
          navigation.replace('Home'); // troca de tela sem permitir voltar ao login
        }
      } catch (error) {
        console.log('Erro ao verificar AsyncStorage:', error);
      }
    };
verificarLoginSalvo();

    verificarLoginSalvo();
  }, []);

  // ✅ Função de login
  const verificar = async () => {
    if (sn !== '12345') {
      setMensagemErro('Senha incorreta!');
      return;
    }
    if (usu !== 'jota') {
      setMensagemErro('Usuário incorreto!');
      return;
    }

    setMensagemErro('');
    try {
      await setState('true');
      navigation.replace('Home'); // evita voltar para login
    } catch (error) {
      console.log('Erro ao salvar informações:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="usuário"
            keyboardType="default"
            value={usu}
            onChangeText={setUsu}
          />
          <TextInput
            style={styles.input}
            placeholder="senha"
            keyboardType="numeric"
            secureTextEntry={true}
            value={sn}
            onChangeText={setSn}
          />
          {mensagemErro ? (
            <Text style={styles.error}>{mensagemErro}</Text>
          ) : null}
          <Button title="Entrar" onPress={verificar} color="blue" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 18,
    color: 'blue',
  },
  input: {
    width: windowWidth * 0.8,
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});