import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const findLoginState = async () => {
    try {
      const value = await AsyncStorage.getItem('in');
      setIsLoggedIn(value === 'true');
    } catch (error) {
      console.log('Erro nas informações do login:', error);
    }
  };

  useEffect(() => {
    findLoginState();
  }, []);

  if (isLoggedIn === null) {
    return null; // ou uma tela de carregamento
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerLeft: null }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerLeft: null }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerLeft: null }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerLeft: null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
