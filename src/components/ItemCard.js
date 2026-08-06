import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ItemCard({ item }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.strMealThumb }}
        style={styles.image}
      />

      <Text style={styles.title}>
        {item.strMeal}
      </Text>

      <Text style={styles.category}>
        Category: {item.strCategory}
      </Text>

      <Text style={styles.area}>
        Cuisine: {item.strArea}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 12,
    padding: 16,
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 10,
    marginBottom: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
  },

  category: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },

  area: {
    fontSize: 16,
    color: "#666",
  },
});