import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import RecipeItemCard from './RecipeItemCard'; // Make sure to import the RecipeItemCard component
import Background from '../Background';
const RecipeFoodList = () => {
  const [recipeItems, setRecipeItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipeItems = async () => {
      try {
        
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();

        setRecipeItems(data.recipes); // Access 'recipes' array from JSON data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe items:', error);
        setError('Error fetching recipe items');
        setLoading(false);
      }
    };

    fetchRecipeItems();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <Background>
    <View style={styles.container}>
      <FlatList
        data={recipeItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <RecipeItemCard item={item} />}
      />
    </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default RecipeFoodList;
