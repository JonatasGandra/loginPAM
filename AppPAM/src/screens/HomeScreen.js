import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { setState } from '../utils/allUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  const logout = async () => {
    try {
      await setState('false');
      navigation.navigate('Login');

      const value = await AsyncStorage.getItem('in');
      console.log(value);
      
    } catch (error) {
      console.log('Erro ao realizar logout:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Logout"
          onPress={logout}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#add2f8',
    margin: 10,
    width: windowWidth * 0.5,
    borderRadius: 5,
  },
});