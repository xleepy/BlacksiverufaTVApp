import React, { useEffect } from 'react';
import { Player } from './Player';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Segment } from '../home/hooks';
import { Text } from 'react-native';

type Props = NativeStackScreenProps<any, any>;

export const PlayerScreen = ({ route, navigation }: Props) => {
  const segment = route.params as Segment | undefined;

  useEffect(() => {
    navigation.setOptions({ title: segment?.name ?? 'Not found' });
  }, [segment, navigation]);

  if (!segment) {
    return <Text>Not found</Text>;
  }

  return <Player {...segment} />;
};
