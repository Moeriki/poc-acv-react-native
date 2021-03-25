import * as Linking from 'expo-linking';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import {
  WebViewMessageEvent,
  WebViewNativeEvent,
} from 'react-native-webview/lib/WebViewTypes';

import { View } from '../components/Themed';

export default function BruttoNettoScreen() {
  const webviewRef = React.useRef<WebView>(null);

  /**
   * The WebView page can post string messages to React Native.
   */
  const handleWebViewMessage = (event: WebViewMessageEvent) => {
    console.log(event.nativeEvent.data); // `Hello!`
  };

  /**
   * The WebView can intercept history changes and decide how to react to them.
   */
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
        // This code is run on every page change.
        injectedJavaScript={`
          (function() {
            document.body.style.backgroundColor = 'red';
            window.ReactNativeWebView.postMessage('Hello!');
          })();
        `}
        onMessage={handleWebViewMessage}
        onNavigationStateChange={handleWebViewNavigationStateChange}
        ref={webviewRef}
        source={{
          // We can send session cookies to the server eg. for authenticated
          // user sessions.
          headers: {
            Cookie: 'cookie1=asdf; cookie2=uijk',
          },
          uri: 'https://f7-site.vercel.app',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
