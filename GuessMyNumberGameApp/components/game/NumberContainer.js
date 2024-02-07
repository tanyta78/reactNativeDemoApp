import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/color";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily:'open-sans-bold',
    color: COLORS.accent500,
    fontSize: 36,
  },
});
