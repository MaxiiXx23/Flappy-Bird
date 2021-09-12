import React from 'react'
import {StatusBar, StyleSheet,View, Text} from 'react-native'
import { GameEngine } from 'react-native-game-engine'
export default props => {
  return(
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <GameEngine>

      </GameEngine>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  ScreenGame: {
    position:'absolute',
    top:0,
    right:0,
    left:0,
    bottom:0
  }
})
