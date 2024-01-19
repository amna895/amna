import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Background from '../Background';

const RecipeItemCard = ({ item }) => {
  const navigation = useNavigation(); // Initialize useNavigation hook

  const viewDetail = () => {
    // Navigate to RecipeItemDetail screen and pass item details
    navigation.navigate('RecipeItemDetail', { item });
  };

  return (
    <Background>
    <TouchableOpacity style={styles.container} onPress={viewDetail}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      {/* Add any additional information you want to display */}
    </TouchableOpacity>
    </Background>
  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default RecipeItemCard;
