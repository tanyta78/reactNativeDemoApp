import React, { useEffect, useState } from 'react'
import { Button, FlatList, Text, View } from 'react-native'
import { BleManager } from 'react-native-ble-plx'

const BLEScanner = () => {
  const [devices, setDevices] = useState([])
  const [scanning, setScanning] = useState(false)

  const manager = new BleManager()

  useEffect(() => {
    return () => {
      manager.destroy()
    }
  }, [])

  const startScanning = () => {
    setDevices([])
    setScanning(true)

    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error(error)
        return
      }

      if (!devices.some((dev) => dev.id === device.id)) {
        setDevices((prevDevices) => [...prevDevices, device])
      }
    })
  }

  const stopScanning = () => {
    setScanning(false)
    manager.stopDeviceScan()
  }

  const renderItem = ({ item }) => (
    <View>
      <Text>{`Device: ${item.name || 'Unknown'}`}</Text>
      <Text>{`ID: ${item.id}`}</Text>
      <Text>{`RSSI: ${item.rssi}`}</Text>
    </View>
  )

  return (
    <View>
      <Button
        title={scanning ? 'Stop Scanning' : 'Start Scanning'}
        onPress={scanning ? stopScanning : startScanning}
      />
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No devices found</Text>}
      />
    </View>
  )
}

export default BLEScanner
