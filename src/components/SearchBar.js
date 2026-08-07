import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function SearchBar({
  value,
  onChangeText,
}) {
  return (
    <TextInput
      placeholder="Search meals..."
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
});