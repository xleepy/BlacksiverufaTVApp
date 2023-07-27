import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Video, { VideoProperties } from 'react-native-video';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  videoContainer: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  video: {
    position: 'absolute',
    height: '100%',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
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

  const source = useMemo<VideoProperties['source']>(() => {
    return { uri: hls ?? direct, type: hls ? 'm3u8' : 'mp4' };
  }, [hls, direct]);

  return (
    <View style={styles.container}>
      {shouldDisplayIndicator && <Text>Loading....</Text>}
      <View style={styles.videoContainer}>
        <Video
          ref={playerRef}
          controls
          style={styles.video}
          source={source}
          onError={console.error}
          onLoad={handleLoad}
          onLoadStart={handleLoadStart}
          onBuffer={handleBuffering}
        />
      </View>
    </View>
  );
};
