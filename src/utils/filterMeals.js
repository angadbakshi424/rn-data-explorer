export function filterMeals(meals, search) {
  return meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );
}