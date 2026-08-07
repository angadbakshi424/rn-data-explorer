import React, { useContext } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

import { ThemeContext } from "../../context/ThemeContext";
import colors from "../../theme/colors";

export default function ErrorState({
  message,
  onRetry,
}) {
  const { isDark } = useContext(ThemeContext);

  const theme = isDark ? colors.dark : colors.light;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <Text style={styles.icon}>⚠️</Text>

      <Text
        style={[
          styles.title,
          {
            color: theme.text,
          },
        ]}
      >
        Something went wrong
      </Text>

      <Text
        style={[
          styles.message,
          {
            color: theme.secondaryText,
          },
        ]}
      >
        {message || "Unable to load meals."}
      </Text>

      <Pressable
        onPress={onRetry}
        android_ripple={{ color: "#cccccc" }}
        style={[
          styles.button,
          {
            backgroundColor: theme.primary,
          },
        ]}
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
    paddingHorizontal: 24,
  },

  icon: {
    fontSize: 60,
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 22,
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
    elevation: 3,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});