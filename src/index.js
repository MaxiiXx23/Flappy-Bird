import React, { useState, useEffect } from 'react'
import { StatusBar, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { GameEngine } from 'react-native-game-engine'
import entities from './entities'
import Physics from './components/physics'
export default props => {
  const [running, setRunning] = useState(false)
  const [gameEngine, setGameEngine] = useState(null)
  const [currentPoints, setCurrentPoints] = useState(0)
  useEffect(() => {
    setRunning(false)
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.score}>{ currentPoints }</Text>
      <GameEngine
        ref={(ref) => { setGameEngine(ref) }}
        systems={[Physics]}
        running={running}
        onEvent={(e) => {
          switch (e.type) {
            case 'game_over':
              setRunning(false)
              gameEngine.stop()
              break;
            case 'new_point' :
              setCurrentPoints(currentPoints +1)
              break;
          }
        }}
        entities={entities()}
        style={styles.ScreenGame}
      >

      </GameEngine>

        {!running ? 
          <View style={styles.ContainerButton}>
            <TouchableOpacity style={styles.button}
              onPress={() => {
                setCurrentPoints(0)
                setRunning(true)
                gameEngine.swap(entities())
              }}
            >
              <Text style={styles.TextButton}>
                START GAME
              </Text>
            </TouchableOpacity>
          </View> 
          :null
        }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ScreenGame: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },
  score: {
    textAlign:'center',
    fontSize:40,
    fontWeight:'500',
    margin: 20
  },
  ContainerButton: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    backgroundColor:'black',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  TextButton: {
    fontWeight:'500',
    color:'white',
    fontSize:30
  }
})
