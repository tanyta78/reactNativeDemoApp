import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { COLORS } from "../../constants/color";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: COLORS.primary800,
    borderRadius: 8,
    elevation: 4, // Android
    shadowColor: "black", // ios
    shadowOffset: { width: 0, height: 2 }, // ios
    shadowRadius: 6, // ios
    shadowOpacity: 0.25, //ios
  },
});
