import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";
// import {useRoute} from '@react-navigation/native'

export default function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute()
  const categoryId = route.params.categoryId;

  const categoryMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList items={categoryMeals} />;
}

const styles = StyleSheet.create({});
