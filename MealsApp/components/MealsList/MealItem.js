import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native'
import MealDetails from '../MealDetails'

export default function MealItem({
  mealId,
  title,
  imageUrl,
  duration,
  complexity,
  affordability
}) {
  const navigation = useNavigation()

  function onPressHandler() {
    navigation.navigate('MealDetails', {
      mealId: mealId
    })
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{ color: '#ccc' }}
        onPress={onPressHandler}
        accessible={true}
        accessibilityLabel={`List item ${title}`}
        accessibilityHint={`Navigates to view details of ${title}`}
      >
        <View
          style={styles.innerContainer}
          accessible={true}
        >
          <View accessible={true}>
            <Image
              accessible={true}
              source={{ uri: imageUrl }}
              style={styles.image}
              accessibilityRole="image"
              accessibilityLabel={`Image of the meal ${title}`}
            />
            <Text
              style={styles.title}
              accessible={true}
              accessibilityLabel={`Title of the meal ${title}`}
            >
              {title}
            </Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    elevation: 4,
    //ios specific - for shadow to take effect we need to add background color
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  }
})
