import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
});

type Props = {
  uri: string;
};

type PlayerState = 'loading' | 'buffering' | 'idle';

// docs https://github.com/react-native-video/react-native-video/blob/master/API.md#onload

export const NativePlayer = ({ uri }: Props) => {
  const [playerState, setPlayerState] = useState<PlayerState>('idle');

  const handleLoadStart = useCallback(() => {
    console.log('here');
    setPlayerState('loading');
  }, []);

  const handleBuffering = useCallback(() => {
    setPlayerState('buffering');
  }, []);

  const handleLoad = useCallback(() => {
    setPlayerState('idle');
  }, []);

  const shouldDisplayIndicator = playerState !== 'idle';

  return (
    <View style={styles.video}>
      {shouldDisplayIndicator && <Text>Loading....</Text>}
      <Video
        style={styles.video}
        source={{ uri }}
        onError={console.error}
        onLoad={handleLoad}
        onLoadStart={handleLoadStart}
        onBuffer={handleBuffering}
      />
    </View>
  );
};
