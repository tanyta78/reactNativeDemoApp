import { ResizeMode, Video } from 'expo-av'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './../UI/Button'

const VideoPlayer = ({
  record = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
}) => {
  const video = React.useRef(null)
  const [status, setStatus] = React.useState({})

  return (
    <View>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: record
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <Button
        onPress={() =>
          status?.isPlaying
            ? video.current.pauseAsync()
            : video.current.playAsync()
        }
      >
        {status?.isPlaying ? 'Pause' : 'Play'}
      </Button>
    </View>
  )
}

export default VideoPlayer

const styles = StyleSheet.create({
  video: {
    alignSelf: 'center',
    width: 350,
    height: 220
  }
})
