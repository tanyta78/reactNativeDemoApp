import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

function IconButton({ icon, color, size, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding:8,
    justifyContent:'center',
    alignItems:'center'
  },
  pressed: {
    opacity: 0.7,
  },
});
