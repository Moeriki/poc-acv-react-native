import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

import { View } from '../components/Themed';

export default function BruttoNettoScreen() {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://f7-site.vercel.app' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
