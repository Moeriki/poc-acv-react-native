import * as Linking from 'expo-linking';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { WebViewNativeEvent } from 'react-native-webview/lib/WebViewTypes';

import { View } from '../components/Themed';

export default function BruttoNettoScreen() {
  const webviewRef = React.useRef<WebView>(null);

  const handleWebViewNavigationStateChange = ({ url }: WebViewNativeEvent) => {
    if (webviewRef.current == null || url == null) {
      return;
    }
    if (!url.includes('f7-site')) {
      webviewRef.current.stopLoading();
      Linking.openURL(url).catch(console.error);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        onNavigationStateChange={handleWebViewNavigationStateChange}
        ref={webviewRef}
        source={{ uri: 'https://f7-site.vercel.app' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
