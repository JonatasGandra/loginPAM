
import React from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
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
  buttonContainer: {
    width: Dimensions.get('window').width * 0.6,
    margin: 10,
    backgroundColor: '#DDDDDD',
    padding: 10
  }
});
