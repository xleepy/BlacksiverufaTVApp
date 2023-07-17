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

export type Segment = {
  youtube: string;
  name: string;
  date: string;
  games: string[];
  note?: string;
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [segments, setSegments] = useState<Segment[]>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    fetch(SEGMENTS_PATH)
      .then(res => res.json())
      .then(result => {
        const allVideos: Segment[] = Object.values(result);
        setSegments(allVideos);
      });
  }, []);

  const [firstSegment] = segments ?? [];

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {firstSegment && (
        <IframePlayer
          name={firstSegment.name}
          youtubeId={firstSegment.youtube}
        />
      )}
    </SafeAreaView>
  );
}

export default App;
