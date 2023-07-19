import React, { useCallback } from 'react';
import { Segment, useSegments } from './hooks';
import { ScrollView, View } from 'react-native';
import { Card } from '../card/Card';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export const Home = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const segments = useSegments();

  const handleNavigationToPlayer = useCallback(
    (segment: Segment) => {
      navigation.navigate('Player', segment);
    },
    [navigation],
  );

  console.log('rendered');

  return (
    <View>
      <ScrollView>
        {segments.map(segment => {
          return (
            <Card
              key={segment.id}
              segment={segment}
              onSegmentSelect={handleNavigationToPlayer}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
