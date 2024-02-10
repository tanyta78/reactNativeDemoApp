import React from "react";
import { FlatList, StyleSheet } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function renderCategoryItem(itemData) {
  function pressHandler() {}

  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPressHandler={pressHandler}
    />
  );
}

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview',{
        categoryId:itemData.item.id
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPressHandler={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  listItems: {},
});
