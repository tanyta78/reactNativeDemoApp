import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/FavoritesContext";

export default function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  return <MealsList items={favMeals} />;
}

const styles = StyleSheet.create({});
