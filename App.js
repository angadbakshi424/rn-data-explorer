import { View, Text, Image, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://picsum.photos/200",
        }}
        style={styles.image}
      />

      <Text style={styles.heading}>
        Welcome to React Native
      </Text>

      <Text style={styles.subtitle}>
        My Expo app is running successfully.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
});