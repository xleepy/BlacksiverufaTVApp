/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import WebView from 'react-native-webview';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [segments, setSegments] = useState<Record<string, any>[]>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    fetch('https://bsu.drhx.ru/data/segments.json')
      .then(res => res.json())
      .then(result => {
        const allVideos: Record<string, any>[] = Object.values(result);
        setSegments(allVideos);
      });
  }, []);

  const [firstSegment] = segments ?? [];

  const youtubeId = firstSegment?.youtube;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        {youtubeId && (
          <WebView
            startInLoadingState
            javaScriptEnabled
            allowsFullscreenVideo
            allowsInlineMediaPlayback
            mediaPlaybackRequiresUserAction
            onError={err => console.log('err', err)}
            source={{
              html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${youtubeId}" title="Mafia II #3 [03.11.19] (перезалив⁴)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default App;
