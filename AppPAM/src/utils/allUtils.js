import AsyncStorage from '@react-native-async-storage/async-storage';

export const setState = async (state) => {
  try {
    await AsyncStorage.setItem('in', state);
  } catch (error) {
    console.log('Erro ao tentar salvar:', error);
  }
};