import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function WelcomeForm() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Characters list goes here! You are free to come up with a design</Text>
      <Image
        source={require('./Frame.png')}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    paddingTop: 20,
    position: 'relative'
  },
  text: {
    color: 'white',
    textAlign: 'center'
  },
  image: {
    position: 'absolute',
    top: 37, 
    right: 296, 
    width: 50, 
    height: 50, 
  }
})
