import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';
import { useOrientation } from '../../hooks/utils';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  video: {
    height: '100%',
    width: '100%',
  },
});

type Props = {
  hls?: string;
  direct?: string;
};

type PlayerState = 'loading' | 'buffering' | 'idle';

// docs https://github.com/react-native-video/react-native-video/blob/master/API.md#onload

export const NativePlayer = ({ hls, direct }: Props) => {
  const playerRef = useRef<Video>(null);
  const [playerState, setPlayerState] = useState<PlayerState>('idle');
  const orientation = useOrientation();

  const handleLoadStart = useCallback(() => {
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
    <View style={styles.container}>
      {shouldDisplayIndicator && <Text>Loading....</Text>}
      <Video
        ref={playerRef}
        controls
        resizeMode={orientation === 'landscape' ? 'cover' : 'contain'}
        style={styles.video}
        source={{ uri: hls ?? direct, type: hls ? 'm3u8' : 'mp4' }}
        onError={console.error}
        onLoad={handleLoad}
        onLoadStart={handleLoadStart}
        onBuffer={handleBuffering}
      />
    </View>
  );
};
