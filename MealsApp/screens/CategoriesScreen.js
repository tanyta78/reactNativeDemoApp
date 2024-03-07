import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id
      })
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPressHandler={pressHandler}
        accessibilityHint="Navigates to the meals for selected category screen"
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      accessibilityRole="list"
      accessibilityLabel="List of meal categories"
    />
  )
}

const styles = StyleSheet.create({
  listItems: {}
})
