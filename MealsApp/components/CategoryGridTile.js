import React from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
// import { useNavigation } from "@react-navigation/native";

export default function CategoryGridTile({
  title,
  color,
  onPressHandler,
  accessibilityHint
}) {
  // const navigation = useNavigation(); ii if we needed to navigate inside the components

  return (
    <View style={styles.gridItem}>
      <Pressable
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={`Category title ${title}`}
        accessibilityHint={accessibilityHint}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null
        ]}
        android_ripple={{ color: '#ccc' }}
        onPress={onPressHandler}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', //ripple effect don't go beyond the border
    //ios specific - for shadow to take effect we need to add background color
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
