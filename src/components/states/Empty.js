import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { ThemeContext } from "../../context/ThemeContext";
import colors from "../../theme/colors";

export default function Empty() {
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
      <Text style={styles.icon}>🍽️</Text>

      <Text
        style={[
          styles.title,
          {
            color: theme.text,
          },
        ]}
      >
        No Meals Found
      </Text>

      <Text
        style={[
          styles.message,
          {
            color: theme.secondaryText,
          },
        ]}
      >
        Try searching with a different meal name or clear the search to see all available meals.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    marginTop: 50,
  },

  icon: {
    fontSize: 70,
    marginBottom: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  message: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
});