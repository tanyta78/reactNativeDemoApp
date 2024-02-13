import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ExpensesSummary({ period, expenses }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{period}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
