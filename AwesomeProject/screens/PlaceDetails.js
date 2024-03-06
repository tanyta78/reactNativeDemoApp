import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../constants/colors'
import { fetchPlaceDetails } from '../util/database'
import Button from './../components/UI/Button'
import OutlinedButton from './../components/UI/OutlinedButton'

export default function PlaceDetails({ route, navigation }) {
  const [fetchedPlace, setFetchedPlace] = useState()
  const selectedPlaceId = route.params.placeId

  function showOnMapHandler() {
    navigation.navigate('Map', {
      initialLat: fetchedPlace.location.lat,
      initialLng: fetchedPlace.location.lng
    })
  }

  useEffect(() => {
    async function loadPlaceData() {
      const place = await fetchPlaceDetails(selectedPlaceId)
      setFetchedPlace(place)
      navigation.setOptions({
        title: place.title
      })
    }

    loadPlaceData()
  }, [selectedPlaceId])

  if (!fetchedPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data...</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={{ uri: fetchedPlace.imageUri }}
      />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        <OutlinedButton
          icon="map"
          onPress={showOnMapHandler}
        >
          View on Map
        </OutlinedButton>
        <Button onPress={() => navigation.navigate('RecordVideoPlace')}>
          Record Video
        </Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%'
  },
  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  addressContainer: {
    padding: 20
  },
  address: {
    color: COLORS.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  }
})
