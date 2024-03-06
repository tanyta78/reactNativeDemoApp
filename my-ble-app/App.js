import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import BLEScanner from './BLEScanner'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BLEScanner />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App
