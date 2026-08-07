import React, { useState, useMemo, useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

import { MEAL_API } from "./src/api/mealApi";
import useFetch from "./src/hooks/useFetch";

import ThemeProvider, {
  ThemeContext,
} from "./src/context/ThemeContext";

import colors from "./src/theme/colors";

import ItemCard from "./src/components/ItemCard";
import SearchBar from "./src/components/SearchBar";
import FilterChips from "./src/components/FilterChips";
import StatsSummary from "./src/components/StatsSummary";
import ThemeToggle from "./src/components/ThemeToggle";

import Loading from "./src/components/states/Loading";
import ErrorState from "./src/components/states/ErrorState";
import Empty from "./src/components/states/Empty";

const FILTERS = [
  "All",
  "Beef",
  "Chicken",
  "Dessert",
  "Seafood",
  "Vegetarian",
];

function HomeScreen() {
  const { isDark } = useContext(ThemeContext);

  const theme = isDark ? colors.dark : colors.light;

  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const {
    data,
    loading,
    error,
    retry,
  } = useFetch(`${MEAL_API}${search}`);

  const filteredMeals = useMemo(() => {
    if (selectedFilter === "All") {
      return data;
    }

    return data.filter(
      (meal) => meal.strCategory === selectedFilter
    );
  }, [data, selectedFilter]);

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
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      <FlatList
        data={filteredMeals}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <ItemCard item={item} />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 12 }} />
        )}
        ListEmptyComponent={<Empty />}
        ListHeaderComponent={
          <>
            <ThemeToggle />

            <SearchBar
              value={search}
              onChangeText={setSearch}
            />

            <FilterChips
              options={FILTERS}
              selected={selectedFilter}
              onSelect={setSelectedFilter}
            />

            <StatsSummary
              meals={filteredMeals}
            />
          </>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <SafeAreaView style={styles.safeArea}>
          <HomeScreen />
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  list: {
    paddingVertical: 10,
    paddingBottom: 20,
    flexGrow: 1,
  },
});