import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image } from 'react-native';

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
      <Text>Score: {score}</Text>
      {/* <View>
        <FlatList
          data={intervals}
          numColumns={4}
          renderItem={({item}) => (<Button key={item} title={item} accessibilityLabel={item} onPress={() => null} />)} />
      </View> */}
      <View>
        {intervals.map(interval => (
          <Button title={interval} onPress={() => null} />
        ))}
      </View>
      {/* <Button title='Play' onPress={() => setScore(score + 1)}> */}
        <Image source={require('./assets/play-icon.png')} />
      {/* </Button> */}
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
  // score: {
  //   display: 'block',
  // }
});
