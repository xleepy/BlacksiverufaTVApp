import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativePlayer } from './NativePlayer';
import { Segment } from '../home/hooks';
import { WebPlayer } from './WebPlayer';

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

export const Player = ({ youtube, name, direct, hls }: Props) => {
  const haveDirectLink = !!hls || !!direct;
  return (
    <View testID={`${name}-player`} style={styles.container}>
      {haveDirectLink && <NativePlayer hls={hls} direct={direct} />}
      {!haveDirectLink && youtube && (
        <WebPlayer youtube={youtube} name={name} />
      )}
    </View>
  );
};
