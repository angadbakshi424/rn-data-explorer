import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function StatsSummary({
  totalMeals,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Total Meals
      </Text>

      <Text style={styles.value}>
        {totalMeals}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  value: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8,
  },
});