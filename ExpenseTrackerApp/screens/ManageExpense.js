import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "./../store/expenses-context";

export default function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const editingExpenseId = route.params?.expenseId;
  const isEditing = !!editingExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (exp) => exp.id === editingExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add expense",
    });
  }, [isEditing, navigation]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editingExpenseId);
    navigation.goBack();
  }

  function cancelExpenseHandler() {
    navigation.goBack();
  }

  function confirmExpenseHandler(expenseData) {
    if (isEditing) {
      expensesCtx.updateExpense(editingExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelExpenseHandler}
        onSubmit={confirmExpenseHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
