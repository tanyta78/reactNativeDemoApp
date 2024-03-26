import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions
} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import { COLORS } from '../constants/color'
import I18n from '../translations/i18n'

export default function GameOverScreen({ rounds, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions()

  let imageSize = 300

  if (width < 380) {
    imageSize = 150
  }

  if (height < 400) {
    imageSize = 80
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>{I18n.t('game_over')}</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            source={require('../assets/images/success.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.summaryText}>
          {I18n.t('final', {
            rounds: <Text style={styles.highlight}>{rounds}</Text>
          })}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>
          {I18n.t('new_game')}
        </PrimaryButton>
      </View>
    </ScrollView>
  )
}

// const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: COLORS.primary800,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: COLORS.primary500
  }
})
