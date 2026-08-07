import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import useFetch from "./src/hooks/useFetch";
import { MEAL_API } from "./src/api/mealApi";

import ItemCard from "./src/components/ItemCard";

import Loading from "./src/components/states/Loading";
import ErrorState from "./src/components/states/ErrorState";
import Empty from "./src/components/states/Empty";

const Separator = () => (
  <View style={{ height: 12 }} />
);

export default function App() {
  const {
    data,
    loading,
    error,
    retry,
  } = useFetch(MEAL_API);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <ErrorState
        message={error}
        onRetry={retry}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ItemCard item={item} />
        )}
        keyExtractor={(item) => item.idMeal}
        ItemSeparatorComponent={Separator}
        ListEmptyComponent={<Empty />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  list: {
    paddingVertical: 10,
    flexGrow: 1,
  },
});