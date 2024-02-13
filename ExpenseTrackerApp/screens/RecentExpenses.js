import React from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

export default function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}

const styles = StyleSheet.create({});
