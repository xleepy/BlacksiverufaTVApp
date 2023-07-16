import React from 'react';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

type Props = {
  youtubeId: string;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export const IframePlayer = ({ youtubeId }: Props) => {
  return (
    <View style={styles.container}>
      <WebView
        startInLoadingState
        javaScriptEnabled
        allowsFullscreenVideo
        allowsInlineMediaPlayback
        mediaPlaybackRequiresUserAction
        source={{
          html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${youtubeId}" title="Mafia II #3 [03.11.19] (перезалив⁴)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        }}
      />
    </View>
  );
};
