import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";

import {
  PermissionStatus,
  launchCameraAsync,
  useCameraPermissions,
} from "expo-image-picker";
import { COLORS } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

export default function ImagePicker({onImageTaken}) {
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
  const [image, setImage] = useState(null);

  async function verifyPermissions() {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }

    return true;
  }

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    let result = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setImage(result.assets[0].uri);
    onImageTaken(result.assets[0].uri);
  };

  let imagePreview = <Text>No image taken yet.</Text>;

  if (image) {
    imagePreview = (
      <Image
        source={{ uri: image }}
        style={styles.image}
      />
    );
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton
        onPress={takeImageHandler}
        icon="camera"
      >
        Take Image
      </OutlinedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary100,
    borderRadius: 4,
    overflow: "hidden",
    
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
