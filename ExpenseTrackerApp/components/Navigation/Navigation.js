import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { GlobalStyles } from "../../constants/styles";
import ManageExpense from "../../screens/ManageExpense";
import ExpensesOverview from "./ExpensesOverview";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="ExpensesOverview"
        component={ExpensesOverview}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}
