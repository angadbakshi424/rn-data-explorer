import React, { useContext } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";

import { ThemeContext } from "../context/ThemeContext";
import colors from "../theme/colors";

export default function SearchBar({
  value,
  onChangeText,
}) {
  const { isDark } = useContext(ThemeContext);

  const theme = isDark ? colors.dark : colors.light;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.input,
          borderColor: theme.border,
        },
      ]}
    >
      {/* Search Icon */}
      <Text
        style={[
          styles.icon,
          {
            color: theme.secondaryText,
          },
        ]}
      >
        🔍
      </Text>

      {/* Search Input */}
      <TextInput
        placeholder="Search meals..."
        placeholderTextColor={theme.placeholder}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        style={[
          styles.input,
          {
            color: theme.text,
          },
        ]}
      />

      {/* Clear Button */}
      {value.length > 0 && (
        <Pressable
          onPress={() => onChangeText("")}
          android_ripple={{ color: "#cccccc" }}
        >
          <Text
            style={[
              styles.clear,
              {
                color: theme.primary,
              },
            ]}
          >
            ✕
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,

    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderRadius: 14,

    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  icon: {
    fontSize: 18,
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 16,
  },

  clear: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 6,
  },
});