import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Empty() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        No Meals Found
      </Text>

      <Text style={styles.subtitle}>
        Try another search.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 8,
    color: "gray",
  },
});