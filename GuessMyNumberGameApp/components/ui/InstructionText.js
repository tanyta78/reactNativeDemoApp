import React from "react";
import { StyleSheet, Text } from "react-native";
import { COLORS } from "../../constants/color";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily:'open-sans',
    color: COLORS.accent500,
    fontSize: 24,
  },
});
