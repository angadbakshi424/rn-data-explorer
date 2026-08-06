import React from "react";
import { View, Text, StyleSheet } from "react-native";

import useFetch from "./src/hooks/useFetch";
import { MEAL_API } from "./src/api/mealApi";

export default function App() {
  const { data, loading, error } = useFetch(MEAL_API);

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}

      {error && <Text>{error}</Text>}

      {!loading && !error && (
        <Text>
          {data?.length ?? 0} items loaded
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});