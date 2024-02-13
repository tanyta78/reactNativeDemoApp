import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import ManageExpense from "../../screens/ManageExpense";
import ExpensesOverview from "./ExpensesOverview";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExpensesOverview"
        component={ExpensesOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManageExpense"
        component={ManageExpense}
      />
    </Stack.Navigator>
  );
}
