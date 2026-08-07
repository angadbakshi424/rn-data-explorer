import React, { useContext } from "react";
import {
  Pressable,
  Text,
} from "react-native";

import {
  ThemeContext,
} from "../context/ThemeContext";

export default function ThemeToggle() {
  const {
    isDark,
    toggleTheme,
  } = useContext(ThemeContext);

  return (
    <Pressable
      onPress={toggleTheme}
    >
      <Text>
        {isDark
          ? "☀️ Light"
          : "🌙 Dark"}
      </Text>
    </Pressable>
  );
}