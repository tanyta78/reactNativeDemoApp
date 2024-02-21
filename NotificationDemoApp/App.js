import React, { useEffect } from 'react'
import { Button, StyleSheet, View } from 'react-native'

import * as Notification from 'expo-notifications'
import { StatusBar } from 'expo-status-bar'

Notification.setNotificationHandler({
  handleNotification: async() => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    }
  }
})

export default function App() {
  useEffect(() => {
    const subscription1 = Notification.addNotificationReceivedListener(
      (notification) => {
        console.log('NOTIFICATION RECEIVED')
        console.log(JSON.stringify(notification))
      }
    )

    const subscription2 = Notification.addNotificationResponseReceivedListener(
      (response) => {
        console.log('NOTIFICATION RESPONSE RECEIVED')
        console.log(JSON.stringify(response))
      }
    )

    return () => {
      subscription1.remove()
      subscription2.remove()
    }
  }, [])

  function scheduleNotificationHandler() {
    Notification.scheduleNotificationAsync({
      content: {
        title: 'My first local notification',
        body: 'This is the body of the notification.',
        data: { userName: 'Tanya' }
      },
      trigger: {
        seconds: 5
      }
    })
  }

  return (
    <View style={styles.container}>
      <Button
        title="Schedule Notification"
        onPress={scheduleNotificationHandler}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
