import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  Alert,
  FlatList,
  StyleSheet,
  View,
  useWindowDimensions
} from 'react-native'

import NumberContainer from '../components/game/NumberContainer'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'

import GuessLogItem from '../components/game/GuessLogItem'
import { Directions } from '../constants/enums'
import I18n from '../translations/i18n'
import { generateRandomNumberBetween } from '../utils/generateRandomNumberBetween'

let minBoundary = 1
let maxBoundary = 100

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomNumberBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])

  const { width, height } = useWindowDimensions()

  function nextGuessHandler(direction) {
    // direction => 'lower' or 'greater'
    if (
      (direction === Directions.LOWER && currentGuess < userNumber) ||
      (direction === Directions.GREATER && currentGuess > userNumber)
    ) {
      Alert.alert(I18n.t('cheat'), I18n.t('cheat_msg'), [
        { text: I18n.t('sorry'), style: 'cancel' }
      ])
      return
    }

    if (direction === Directions.LOWER) {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomNumberBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    )
    setCurrentGuess(newRndNumber)
    setGuessRounds((prevRounds) => [newRndNumber, ...prevRounds])

    if (newRndNumber === userNumber) {
      onGameOver(guessRounds.length)
      minBoundary = 1
      maxBoundary = 100
    }
  }

  const guessRoundsListLength = guessRounds.length

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(this, Directions.LOWER)}
            >
              <Ionicons
                name="remove"
                size={24}
              />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler(Directions.GREATER)}>
              <Ionicons
                name="add"
                size={24}
              />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  )

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(this, Directions.LOWER)}
            >
              <Ionicons
                name="remove"
                size={24}
              />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler(Directions.GREATER)}>
              <Ionicons
                name="add"
                size={24}
              />
            </PrimaryButton>
          </View>
        </View>
      </>
    )
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center'
  },
  instructionText: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
})
