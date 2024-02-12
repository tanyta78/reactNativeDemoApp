import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(params) {
  return (
    <Drawer.Navigator
      initialRouteName="User"
      screenOptions={{
        headerStyle: { backgroundColor: "#1a0b02" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#4b2812" },
        drawerContentStyle: { backgroundColor: "#1a0b02" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#1a0b02",
        drawerActiveBackgroundColor: "#cea58c",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons
              size={size}
              color={color}
              name="list"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              size={size}
              color={color}
              name="star"
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#1a0b02" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#4b2812" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              // title: "All Categories", not needed when we use drawer instead
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{
              title: "About the meal",
              // headerRight: () => {
              //   return <Button title="Tap me!" />;
              // },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
