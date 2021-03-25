import * as React from 'react';
import { StyleSheet } from 'react-native';

import { TitleText } from '../components/StyledText';
import { Text, View } from '../components/Themed';

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <TitleText>Nieuws</TitleText>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
