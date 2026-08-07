import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ErrorState({
  message,
  onRetry,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Something went wrong
      </Text>

      <Text style={styles.message}>
        {message}
      </Text>

      <Pressable
        style={styles.button}
        onPress={onRetry}
      >
        <Text style={styles.buttonText}>
          Retry
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  message: {
    textAlign: "center",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#ff6b35",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});