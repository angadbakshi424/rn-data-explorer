import React, { useContext } from "react";
import {
  ScrollView,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";

import { ThemeContext } from "../context/ThemeContext";
import colors from "../theme/colors";

export default function FilterChips({
  options,
  selected,
  onSelect,
}) {
  const { isDark } = useContext(ThemeContext);

  const theme = isDark ? colors.dark : colors.light;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {options.map((option) => {
        const active = option === selected;

        return (
          <Pressable
            key={option}
            onPress={() => onSelect(option)}
            android_ripple={{ color: "#cccccc" }}
            style={[
              styles.chip,
              {
                backgroundColor: active
                  ? theme.primary
                  : theme.card,
                borderColor: theme.primary,
              },
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: active
                    ? "#ffffff"
                    : theme.text,
                },
              ]}
            >
              {option}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },

  chip: {
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 25,
    borderWidth: 1,
  },

  text: {
    fontSize: 15,
    fontWeight: "600",
  },
});