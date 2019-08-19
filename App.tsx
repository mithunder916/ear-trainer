import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const intervals = [
  // 'U',
  'm2',
  'M2',
  'm3',
  'M3',
  'P4',
  'tt',
  'P5',
  'm6',
  'M6',
  'm7',
  'M7',
  'P8',
];

export default function App() {
  const [score, setScore] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
      <View style={styles.buttonContainer}>
        {intervals.map(interval => (
          <TouchableOpacity style={styles.button} onPress={() => null}>
            <Text>{interval}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => setScore(score + 1)}>
        <Image style={styles.play} source={require('./assets/play-icon.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    marginBottom: 30,
  },
  play: {
    width: 50,
    height: 50,
  },
  buttonContainer : {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  button: {
    width: '25%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
  // score: {
  //   display: 'block',
  // }
});
