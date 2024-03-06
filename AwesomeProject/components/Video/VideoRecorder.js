import { Camera, CameraType } from 'expo-camera'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import VideoPlayer from './VideoPlayer'

const VideoRecorder = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const [type, setType] = useState(CameraType.back)
  const [camera, setCamera] = useState(null)
  const [record, setRecord] = useState(undefined)

  if (!permission) {
    // Camera permissions are still loading
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button
          onPress={requestPermission}
          title="grant permission"
        />
      </View>
    )
  }

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    )
  }

  const takeVideo = async () => {
    if (camera) {
      try {
        const data = await camera.recordAsync({ quality: '4:3' })
        console.log(data)

        setRecord(data.uri)
        console.log(data.uri)
      } catch (error) {
        // Alert.alert('Insufficient Permissions!')
        console.log(error)
      }
    }
  }

  const stopVideo = async () => {
    camera.stopRecording()
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ratio={'4:3'}
        ref={(ref) => setCamera(ref)}
      ></Camera>
      <View style={styles.buttonContainer}>
        <Button
          title="Flip Camera"
          onPress={toggleCameraType}
        ></Button>
        <Button
          title="Take video"
          onPress={() => takeVideo()}
        />
        <Button
          title="Stop Video"
          onPress={() => stopVideo()}
        />
      </View>
      <VideoPlayer record={record} />
    </View>
  )
}

export default VideoRecorder

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 20,
    height: 300
  },
  camera: {
    aspectRatio: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20
  },
  buttons: {
    flex: 1
  }
})
