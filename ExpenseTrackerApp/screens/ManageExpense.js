import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ManageExpense({ route, navigation }) {
  const editingExpenseId = route.params?.expenseId;
  const isEditing = !!editingExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add expense",
    });
  }, [isEditing, navigation]);

  return (
    <View>
      <Text>ManageExpense</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
