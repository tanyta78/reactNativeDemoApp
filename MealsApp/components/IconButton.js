import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

export default function IconButton({
  icon,
  color,
  onPress,
  accessibilityHint
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel="Icon button"
      accessibilityHint={accessibilityHint}
    >
      <Ionicons
        name={icon}
        size={24}
        color={color}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7
  }
})
