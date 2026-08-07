import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import useFetch from "./src/hooks/useFetch";
import { MEAL_API } from "./src/api/mealApi";
import ItemCard from "./src/components/ItemCard";

const Separator = () => (
  <View style={{ height: 12 }} />
);

export default function App() {
  const { data, loading, error } = useFetch(MEAL_API);

  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ItemCard item={item} />
        )}
        keyExtractor={(item) => item.idMeal}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  list: {
    paddingVertical: 12,
  },
});