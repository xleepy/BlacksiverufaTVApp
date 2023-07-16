/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SEGMENTS_PATH } from '@env';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { IframePlayer } from './components/IFramePlayer';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [segments, setSegments] = useState<Record<string, any>[]>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    fetch(SEGMENTS_PATH)
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
      {youtubeId && <IframePlayer youtubeId={youtubeId} />}
    </SafeAreaView>
  );
}

export default App;
