import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native';
import { setState } from '../utils/allUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [usu, setUsu] = useState('');
    const [sn, setSn] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const verificar = async () => {
        if (sn !== '12345') {
            setMensagemErro('Senha incorreta!');

            return;
        } if (usu !== 'jota') {
            setMensagemErro('Usuário incorreto!');

            return;
        }
        setMensagemErro('');
        try {
            await setState('true')
            navigation.navigate('Home')

            const value = await AsyncStorage.getItem('in');
            console.log(value);
            
        } catch (error) {
            console.log('erro ao salvar informações', error)
        }


    };

    const value = AsyncStorage.getItem('in');
    console.log(value);

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
                    {mensagemErro ? <Text style={styles.error}>{mensagemErro}</Text> : null}
                    <Button title="Entrar" onPress={verificar} color="green" />
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: windowWidth * 0.8,
        height: 40,
        borderColor: 'black',
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