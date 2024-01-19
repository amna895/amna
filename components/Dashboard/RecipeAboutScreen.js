// AboutScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Background from '../Background';
const RecipeAboutScreen = () => {
  return (
    <Background>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About Recipe App</Text>

      <Text style={styles.description}>
        Welcome to the Recipe App, your go-to source for delicious recipes!
        Explore a variety of mouth-watering dishes, discover new cooking techniques,
        and satisfy your culinary cravings.
      </Text>

      <Text style={styles.sectionTitle}>Features</Text>
      <Text style={styles.description}>
        - Browse a diverse collection of recipes from different cuisines.
        {"\n"}
        - Find detailed instructions and ingredients for each recipe.
        {"\n"}
        - Save your favorite recipes for quick access.
        {"\n"}
        - Create an account to unlock additional features like saving your cooking preferences.
      </Text>

      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text style={styles.description}>
        Have questions or suggestions? Reach out to us at support@recipeapp.com.
      </Text>
    </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'justify',
    
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default RecipeAboutScreen;
