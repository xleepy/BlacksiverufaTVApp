/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { IframePlayer } from './components/IFramePlayer';
import { useSegments } from './hooks/data';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const segments = useSegments();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
