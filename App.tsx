/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Player } from './components/Player';
import { useSegments } from './hooks/data';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const segments = useSegments();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const segmentWithDirectLink = segments.find(s => !!s.direct);

  console.log(segmentWithDirectLink);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {segmentWithDirectLink && <Player {...segmentWithDirectLink} />}
    </SafeAreaView>
  );
}

export default App;
