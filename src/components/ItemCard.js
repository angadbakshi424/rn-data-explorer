import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

import { ThemeContext } from "../context/ThemeContext";
import colors from "../theme/colors";

export default function ItemCard({ item }) {
  const { isDark } = useContext(ThemeContext);

  const theme = isDark ? colors.dark : colors.light;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.card,
          shadowColor: theme.shadow,
        },
      ]}
    >
      <Image
        source={{ uri: item.strMealThumb }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text
          style={[
            styles.title,
            {
              color: theme.text,
            },
          ]}
          numberOfLines={2}
        >
          {item.strMeal}
        </Text>

        <View style={styles.infoRow}>
          <Text
            style={[
              styles.label,
              {
                color: theme.secondaryText,
              },
            ]}
          >
            Category:
          </Text>

          <Text
            style={[
              styles.value,
              {
                color: theme.primary,
              },
            ]}
          >
            {item.strCategory}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text
            style={[
              styles.label,
              {
                color: theme.secondaryText,
              },
            ]}
          >
            Cuisine:
          </Text>

          <Text
            style={[
              styles.value,
              {
                color: theme.primary,
              },
            ]}
          >
            {item.strArea}
          </Text>
        </View>

        <Text
          style={[
            styles.id,
            {
              color: theme.secondaryText,
            },
          ]}
        >
          Meal ID: {item.idMeal}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: "hidden",

    elevation: 5,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.2,

    shadowRadius: 5,
  },

  image: {
    width: "100%",
    height: 220,
  },

  content: {
    padding: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },

  infoRow: {
    flexDirection: "row",
    marginBottom: 8,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    marginRight: 6,
  },

  value: {
    fontSize: 15,
    fontWeight: "500",
  },

  id: {
    marginTop: 12,
    fontSize: 13,
    fontStyle: "italic",
  },
});