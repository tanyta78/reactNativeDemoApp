import { useIsFocused } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { fetchPlaces } from '../util/database'
import PlacesList from './../components/Places/PlacesList'

export default function AllPlaces() {
  const [loadedPlaces, setLoadedPlaces] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces()
      setLoadedPlaces(places)
    }
    if (isFocused) {
      loadPlaces()

      // setLoadedPlaces((currentPlaces) => [
      //   ...currentPlaces,
      //   route.params.place,
      // ]);
    }
  }, [isFocused])

  return <PlacesList places={loadedPlaces} />
}

const styles = StyleSheet.create({})
