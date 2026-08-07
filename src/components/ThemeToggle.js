import React, { useContext } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
} from "react-native";

import { ThemeContext } from "../context/ThemeContext";
import colors from "../theme/colors";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const theme = isDark ? colors.dark : colors.light;

  return (
    <Pressable
      onPress={toggleTheme}
      android_ripple={{ color: "#cccccc" }}
      style={[
        styles.button,
        {
          backgroundColor: theme.primary,
        },
      ]}
    >
      <Text style={styles.icon}>
        {isDark ? "☀️" : "🌙"}
      </Text>

      <Text style={styles.text}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,

    paddingVertical: 12,
    paddingHorizontal: 16,

    borderRadius: 12,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    elevation: 4,
  },

  icon: {
    fontSize: 18,
    marginRight: 8,
  },

  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});