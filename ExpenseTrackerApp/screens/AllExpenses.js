import React from "react";
import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

export default function AllExpenses() {
  return <ExpensesOutput expensesPeriod='Total' />;
}

const styles = StyleSheet.create({});
