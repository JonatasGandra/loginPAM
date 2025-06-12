import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LoginScreen from './src/screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const Stack = createStackNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null)

  const findLoginState = async () => {
    try {
      const value = await AsyncStorage.getItem('in');
      setIsLoggedIn(value === 'true');
    } catch (error) {
      console.log('Erro ao buscar informações de login:', error);
    }
  };

  useEffect(() => {
    findLoginState()
  }, [])

  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
        <Stack.Screen name="Home"
          component={HomeScreen}
          options={{ headerLeft: null, }}
        />
        <Stack.Screen name="Login"
          component={LoginScreen}
          options={{ headerLeft: null, }}
        />
        <Stack.Screen name="Details"
          component={DetailsScreen}
          options={{ headerLeft: null, }}
        />
        <Stack.Screen name="Profile"
          component={ProfileScreen}
          options={{ headerLeft: null, }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

