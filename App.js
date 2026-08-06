import React from "react";
import { View, Text, StyleSheet } from "react-native";

import useFetch from "./src/hooks/useFetch";
import { MEAL_API } from "./src/api/mealApi";
import ItemCard from "./src/components/ItemCard";

export default function App() {
  const { data, loading, error } = useFetch(MEAL_API);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data && data.length > 0 ? (
        <ItemCard item={data[0]} />
      ) : (
        <Text>No meals found.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
  },
});