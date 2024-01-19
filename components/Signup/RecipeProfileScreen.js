// RecipeProfileScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from '../Background';
const RecipeProfileScreen = () => {
  const [chef, setChef] = useState(null);

  useEffect(() => {
    const fetchChefData = async () => {
      try {
        const currentChefJSON = await AsyncStorage.getItem('currentChef');
        const currentChef = currentChefJSON ? JSON.parse(currentChefJSON) : {};
        setChef(currentChef);
      } catch (error) {
        console.error('Error fetching chef data:', error);
      }
    };

    fetchChefData();
  }, []);

  return (
    <Background>
    <View style={styles.container}>
      <Text style={styles.title}>Chef Profile</Text>

      {chef && (
        <View style={styles.profileInfo}>
          <Text style={styles.label}>First Name:</Text>
          <Text style={styles.infoItem}>{chef.firstName}</Text>

          <Text style={styles.label}>Last Name:</Text>
          <Text style={styles.infoItem}>{chef.lastName}</Text>

          <Text style={styles.label}>Chef Name:</Text>
          <Text style={styles.infoItem}>{chef.chefName}</Text>

          {/* Displaying password for demo purposes, consider removing this line */}
          <Text style={styles.label}>Password:</Text>
          <Text style={styles.infoItem}>{chef.password}</Text>
        </View>
      )}
    </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  profileInfo: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    width: '80%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  infoItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default RecipeProfileScreen;
