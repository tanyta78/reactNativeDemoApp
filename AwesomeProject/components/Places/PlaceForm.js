import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { COLORS } from "../../constants/colors";
import { Place } from "../../models/place";
import Button from "../UI/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

export default function PlaceForm({ onCreatePlace }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [pickedImage, setPickedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  function savePlaceHandler() {
    const placeData = new Place(
      enteredTitle,
      pickedImage,
      pickedLocation
    );
    onCreatePlace(placeData);
  }

  function takeImageHandler(imageUri) {
    setPickedImage(imageUri);
  }

  const takeLocationHandler = useCallback(
    (location) => {
      setPickedLocation(location);
    },
    [setPickedLocation]
  );

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          value={enteredTitle}
          style={styles.input}
        />
      </View>
      <ImagePicker onImageTaken={takeImageHandler} />
      <LocationPicker onLocationTaken={takeLocationHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: COLORS.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: COLORS.primary700,
    borderBottomWidth: 2,
    backgroundColor: COLORS.primary100,
  },
});
