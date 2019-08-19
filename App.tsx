import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Sound from 'react-native-sound';
import { Audio } from 'expo-av';

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

const keys = [
  'A',
  'Bb',
  'B',
  'C',
  'Db',
  'D',
  'Eb',
  'E',
  'F',
  'Gb',
  'G',
  'Ab',
];

const C_CADENCE = './assets/audio/C_cadence.mp3';
const Db_CADENCE = './assets/audio/Db_cadence.mp3';
const D_CADENCE = './assets/audio/D_cadence.mp3';
const Eb_CADENCE = './assets/audio/Eb_cadence.mp3';
const E_CADENCE = './assets/audio/E_cadence.mp3';
const F_CADENCE = './assets/audio/F_cadence.mp3';
const Gb_CADENCE = './assets/audio/Gb_cadence.mp3';
const G_CADENCE = './assets/audio/G_cadence.mp3';
const Ab_CADENCE = './assets/audio/Ab_cadence.mp3';
const A_CADENCE = './assets/audio/A_cadence.mp3';
const Bb_CADENCE = './assets/audio/Bb_cadence.mp3';
const B_CADENCE = './assets/audio/B_cadence.mp3';

const cadenceMap = {
  'C': require('./assets/audio/C_cadence.mp3'),
  'Db': require('./assets/audio/Db_cadence.mp3'),
  'D': require('./assets/audio/D_cadence.mp3'),
  'Eb': require('./assets/audio/Eb_cadence.mp3'),
  'E': require('./assets/audio/E_cadence.mp3'),
  'F': require('./assets/audio/F_cadence.mp3'),
  'Gb': require('./assets/audio/Gb_cadence.mp3'),
  'G': require('./assets/audio/G_cadence.mp3'),
  'Ab': require('./assets/audio/Ab_cadence.mp3'),
  'A': require('./assets/audio/A_cadence.mp3'),
  'Bb': require('./assets/audio/Bb_cadence.mp3'),
  'B': require('./assets/audio/B_cadence.mp3'),
}

export default function App() {
  const [score, setScore] = useState(0);
  const [key, setKey] = useState('C');

  async function playSound(key: string) {
    // const soundObject = new Audio.Sound();
    const audioUrl = cadenceMap[key];
    try {
      // await soundObject.loadAsync(audioUrl);
      // await soundObject.playAsync();
      const { sound: soundObject, status } = await Audio.Sound.createAsync(
        audioUrl,
        { shouldPlay: true }
      );

      const intervalNote = await Audio.Sound.createAsync(
        require('./assets/audio/E.mp3'),
        { shouldPlay: true }
      );

    } catch (error) {
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
      <View style={styles.buttonContainer}>
        {intervals.map(interval => (
          <TouchableOpacity key={interval} style={styles.button} onPress={() => null}>
            <Text>{interval}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={() => {
        const newKey = keys[Math.floor(Math.random() * keys.length)];
        setKey(newKey);
        playSound(newKey);
      }}>
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
    fontSize: 18,
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
    marginBottom: 50,
  },
  button: {
    width: '25%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
