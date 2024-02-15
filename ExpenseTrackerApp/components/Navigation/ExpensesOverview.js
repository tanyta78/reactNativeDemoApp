import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { GlobalStyles } from "../../constants/styles";
import AllExpenses from "../../screens/AllExpenses";
import RecentExpenses from "../../screens/RecentExpenses";
import IconButton from "../UI/IconButton";

const BottomTabs = createBottomTabNavigator();

export default function ExpensesOverview() {
  function manageExpenseHandler(navigation) {
    navigation.navigate("ManageExpense");
  }

  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => manageExpenseHandler(navigation)}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="hourglass"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="calendar"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
