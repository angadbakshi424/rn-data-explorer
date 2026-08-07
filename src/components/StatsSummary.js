import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { ThemeContext } from "../context/ThemeContext";
import colors from "../theme/colors";

import {
  getTotalMeals,
  getTotalCategories,
  getTotalAreas,
} from "../utils/stats";

export default function StatsSummary({ meals }) {
  const { isDark } = useContext(ThemeContext);

  const theme = isDark ? colors.dark : colors.light;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.card,
        },
      ]}
    >
      <View style={styles.box}>
        <Text
          style={[
            styles.value,
            {
              color: theme.primary,
            },
          ]}
        >
          {getTotalMeals(meals)}
        </Text>

        <Text
          style={[
            styles.label,
            {
              color: theme.secondaryText,
            },
          ]}
        >
          Meals
        </Text>
      </View>

      <View
        style={[
          styles.divider,
          {
            backgroundColor: theme.border,
          },
        ]}
      />

      <View style={styles.box}>
        <Text
          style={[
            styles.value,
            {
              color: theme.primary,
            },
          ]}
        >
          {getTotalCategories(meals)}
        </Text>

        <Text
          style={[
            styles.label,
            {
              color: theme.secondaryText,
            },
          ]}
        >
          Categories
        </Text>
      </View>

      <View
        style={[
          styles.divider,
          {
            backgroundColor: theme.border,
          },
        ]}
      />

      <View style={styles.box}>
        <Text
          style={[
            styles.value,
            {
              color: theme.primary,
            },
          ]}
        >
          {getTotalAreas(meals)}
        </Text>

        <Text
          style={[
            styles.label,
            {
              color: theme.secondaryText,
            },
          ]}
        >
          Cuisines
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 16,
    paddingVertical: 18,
    justifyContent: "space-evenly",
    alignItems: "center",
    elevation: 4,
  },

  box: {
    flex: 1,
    alignItems: "center",
  },

  divider: {
    width: 1,
    height: 45,
  },

  value: {
    fontSize: 24,
    fontWeight: "bold",
  },

  label: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "600",
  },
});