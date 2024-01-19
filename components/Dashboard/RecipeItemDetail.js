import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Background from '../Background';


const RecipeItemDetail = ({ route }) => {
  const { item } = route.params;

  return (
    <Background>
    <ScrollView style={styles.container}>
      <View style={styles.innerview}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.sectionTitle}>Ingredients</Text>
      {item.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.description}>
          {`${index + 1}. ${ingredient}`}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Instructions</Text>
      {item.instructions.map((instruction, index) => (
        <Text key={index} style={styles.description}>
          {`${index + 1}. ${instruction}`}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Prep Time</Text>
      <Text style={styles.description}>{`${item.prepTimeMinutes} minutes`}</Text>

      <Text style={styles.sectionTitle}>Cook Time</Text>
      <Text style={styles.description}>{`${item.cookTimeMinutes} minutes`}</Text>

      <Text style={styles.sectionTitle}>Servings</Text>
      <Text style={styles.description}>{`${item.servings} servings`}</Text>

      <Text style={styles.sectionTitle}>Difficulty</Text>
      <Text style={styles.description}>{item.difficulty}</Text>

      <Text style={styles.sectionTitle}>Cuisine</Text>
      <Text style={styles.description}>{item.cuisine}</Text>

      <Text style={styles.sectionTitle}>Calories per Serving</Text>
      <Text style={styles.description}>{`${item.caloriesPerServing} calories`}</Text>

      <Text style={styles.sectionTitle}>Tags</Text>
      {item.tags.map((tag, index) => (
        <Text key={index} style={styles.description}>
          {`${index + 1}. ${tag}`}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>User ID</Text>
      <Text style={styles.description}>{item.userId}</Text>

      <Text style={styles.sectionTitle}>Rating</Text>
      <Text style={styles.description}>{item.rating}</Text>

      <Text style={styles.sectionTitle}>Review Count</Text>
      <Text style={styles.description}>{item.reviewCount}</Text>

      <Text style={styles.sectionTitle}>Meal Type</Text>
      {item.mealType.map((type, index) => (
        <Text key={index} style={styles.description}>
          {`${index + 1}. ${type}`}
        </Text>
      ))}
</View>
     
    </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,

  },
  innerview:{
    marginBottom:20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default RecipeItemDetail;
