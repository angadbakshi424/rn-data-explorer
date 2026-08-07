// Total number of meals
export const getTotalMeals = (meals) => {
  return meals?.length ?? 0;
};

// Total unique categories
export const getTotalCategories = (meals) => {
  if (!meals || meals.length === 0) return 0;

  const categories = new Set(
    meals.map((meal) => meal.strCategory)
  );

  return categories.size;
};

// Total unique cuisines (areas)
export const getTotalAreas = (meals) => {
  if (!meals || meals.length === 0) return 0;

  const areas = new Set(
    meals.map((meal) => meal.strArea)
  );

  return areas.size;
};