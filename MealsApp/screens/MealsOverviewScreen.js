import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
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

  function renderMealItem(itemData) {
    const mealItem = itemData.item

    const mealItemProps = {
      mealId:mealItem.id,
      title: mealItem.title,
      imageUrl: mealItem.imageUrl,
      duration: mealItem.duration,
      complexity: mealItem.complexity,
      affordability: mealItem.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
