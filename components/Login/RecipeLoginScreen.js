// RecipeLoginScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from '../Background';

const RecipeLoginScreen = ({ navigation }) => {
  const [chefName, setChefName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    checkChef();
  }, []);

  const checkChef = async () => {
    const currentChefJSON = await AsyncStorage.getItem('currentChef');
    const currentChef = currentChefJSON ? JSON.parse(currentChefJSON) : {};
    const chefId = currentChef.id;

    if (currentChef.id != null) {
      navigation.replace('RecipeHome');
    }
  };

  const handleLogin = async () => {
    try {
      const existingChefsJSON = await AsyncStorage.getItem('chefs');
      const existingChefs = existingChefsJSON ? JSON.parse(existingChefsJSON) : [];

      const matchedChef = existingChefs.find(
        chef => chef.chefName === chefName && chef.password === password
      );

      if (chefName !== '' && password !== '' && matchedChef) {
        await AsyncStorage.setItem('currentChef', JSON.stringify(matchedChef));
        setErrorMessage('');
        navigation.navigate('RecipeHome');
      } else {
        setErrorMessage('Invalid chef name or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Background>
    <View style={styles.container}>
       <Text style={styles.maintitle}>WELCOME</Text>
      <Text style={styles.title}>LOG IN</Text>

      <TextInput
        style={styles.input}
        placeholder="Chef Name"
        value={chefName}
        onChangeText={text => setChefName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
<TouchableOpacity style={styles.button} onPress={handleLogin} >
  <Text>Log in </Text>
</TouchableOpacity>
    

      <TouchableOpacity onPress={() => navigation.navigate('RecipeSignup')}>
        <Text style={styles.link}>Explore more by creating an account</Text>
      </TouchableOpacity>
    </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  maintitle: {
    fontSize: 30,
    marginBottom: 70,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    borderRadius: 8,
    backgroundColor:'#fff',
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  link: {
    color: 'blue',
    marginTop: 100,
  },
  button:{
    height: 40,
    width: '80%',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F72D93',
    marginBottom: 30,
  },
});

export default RecipeLoginScreen;
