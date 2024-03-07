import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import MealsList from '../components/MealsList/MealsList'
import { MEALS } from '../data/dummy-data'

export default function FavoritesScreen() {
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids)

  const favMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id))

  if (favMeals.length === 0) {
    return (
      <View
        style={styles.rootContainer}
        accessible={true}
      >
        <Text
          style={styles.text}
          accessible={true}
        >
          You have no favorite meals yet.
        </Text>
      </View>
    )
  }

  return <MealsList items={favMeals} />
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})
