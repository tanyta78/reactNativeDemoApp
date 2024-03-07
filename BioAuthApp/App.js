import * as LocalAuthentication from 'expo-local-authentication'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'

export default function App() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false)
  const [authenticationResult, setAuthenticationResult] = useState(null)

  // Check if hardware supports biometrics
  useEffect(() => {
    ;(async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync()
      setIsBiometricSupported(compatible)
    })()
  })

  const handleBiometricAuth = async () => {
    try {
      const savedBiometrics = await LocalAuthentication.isEnrolledAsync()
      if (!savedBiometrics) {
        return Alert.alert(
          'Biometric record not found',
          'Please verify your identity with your password',
          'OK',
          () => fallBackToDefaultAuth()
        )
      }

      const { success, error } = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate to access the app', // Message shown to the user
        cancelLabel: 'Cancel', // Label for the cancel button
        fallbackLabel: 'Use passcode' // Label for the fallback button (iOS only)
      })

      if (success) {
        setAuthenticationResult('Authentication successful!')
        //TODO Perform actions after successful authentication
      } else {
        setAuthenticationResult(`Authentication failed. Error: ${error}`)
      }
    } catch (error) {
      console.error('Error during authentication:', error)
      setAuthenticationResult('Error during authentication. Please try again.')
    }
  }

  return (
    <View style={styles.container}>
      <Text>
        {isBiometricSupported
          ? 'Your device is compatible with Biometrics'
          : 'Face or Fingerprint scanner is available on this device'}
      </Text>
      <Text>{authenticationResult}</Text>
      <TouchableOpacity onPress={handleBiometricAuth}>
        <Text>Authenticate with Touch ID/Face ID</Text>
      </TouchableOpacity>
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
