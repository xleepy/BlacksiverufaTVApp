import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';

type Props = {
  youtubeId: string;
  name: string;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

const runFirst = `
window.isNativeApp = true;
true; // note: this is required, or you'll sometimes get silent failures
`;

export const IframePlayer = ({ youtubeId, name }: Props) => {
  const link = `https://www.youtube.com/embed/${youtubeId}`;
  // const link = 'https://www.youtube.com/embed/r0MNk_D2H9A';
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <WebView
        injectedJavaScriptBeforeContentLoaded={runFirst}
        allowsFullscreenVideo
        thirdPartyCookiesEnabled
        accessibilityLabel={name}
        source={{
          uri: link,
        }}
      />
    </View>
  );
};
