import React from "react";
import { StyleSheet } from "react-native";
import PlaceForm from "../components/Places/PlaceForm";

export default function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    navigation.navigate("AllPlaces", { place });
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

const styles = StyleSheet.create({});
