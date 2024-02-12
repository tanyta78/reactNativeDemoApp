import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    color: "#c78258",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subtitleContainer: {
    //added because on ios text can't have borders
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: "#c78258",
    borderBottomWidth: 2,
  },
});
