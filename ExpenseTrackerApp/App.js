import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import Navigation from "./components/Navigation/Navigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
