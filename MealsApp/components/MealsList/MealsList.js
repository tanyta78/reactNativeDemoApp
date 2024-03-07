import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import MealItem from './MealItem'

export default function MealsList({ items }) {
  function renderMealItem(itemData) {
    const mealItem = itemData.item

    const mealItemProps = {
      mealId: mealItem.id,
      title: mealItem.title,
      imageUrl: mealItem.imageUrl,
      duration: mealItem.duration,
      complexity: mealItem.complexity,
      affordability: mealItem.affordability
    }
    return <MealItem {...mealItemProps} />
  }

  return (
    <View
      style={styles.container}
      accessibilityRole="list"
      accessibilityLabel="List of meals"
    >
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})
