import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

export default function FilterChips({
  options,
  selected,
  onSelect,
}) {
  return (
    <View style={styles.row}>
      {options.map((option) => (
        <Pressable
          key={option}
          onPress={() => onSelect(option)}
          style={[
            styles.chip,
            selected === option &&
              styles.selectedChip,
          ]}
          android_ripple={{
            color: "#ddd",
          }}
        >
          <Text
            style={[
              styles.text,
              selected === option &&
                styles.selectedText,
            ]}
          >
            {option}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 12,
    gap: 8,
  },

  chip: {
    borderWidth: 1,
    borderColor: "#ff6b35",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },

  selectedChip: {
    backgroundColor: "#ff6b35",
  },

  text: {
    color: "#ff6b35",
  },

  selectedText: {
    color: "#fff",
  },
});