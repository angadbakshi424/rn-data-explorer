import React, { useContext } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import { ThemeContext } from "../../context/ThemeContext";
import colors from "../../theme/colors";

export default function Loading() {
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
      <ActivityIndicator
        size="large"
        color={theme.primary}
      />

      <Text
        style={[
          styles.text,
          {
            color: theme.text,
          },
        ]}
      >
        Loading meals...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: "600",
  },
});