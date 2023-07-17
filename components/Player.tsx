import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import { Segment } from '../hooks/data';
import { NativePlayer } from './NativePlayer';

type Props = Segment;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

const runFirst = `
window.isNativeApp = true;
true; // note: this is required, or you'll sometimes get silent failures
`;

export const Player = ({ youtube, name, direct }: Props) => {
  console.log('direct', direct);
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      {!!direct && <NativePlayer uri={direct} />}
      {!direct && youtube && (
        <WebView
          injectedJavaScriptBeforeContentLoaded={runFirst}
          allowsFullscreenVideo
          thirdPartyCookiesEnabled
          accessibilityLabel={name}
          source={{
            uri: `https://www.youtube.com/embed/${youtube}`,
          }}
        />
      )}
    </View>
  );
};
