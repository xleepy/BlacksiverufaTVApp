import React, { useCallback, useEffect } from 'react';
import { Segment, useSegments } from './hooks';
import {
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  VirtualizedList,
} from 'react-native';
import { Card } from '../card/Card';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const Home = ({ navigation }: NativeStackScreenProps<any, any>) => {
  const [segments, isLoading] = useSegments();

  useEffect(() => {
    navigation.setOptions({ title: 'Архив стримов BlackUFA' });
  }, [navigation]);

  const handleNavigationToPlayer = useCallback(
    (segment: Segment) => {
      navigation.navigate('Player', segment);
    },
    [navigation],
  );

  const renderItem = useCallback<ListRenderItem<Segment>>(
    ({ item }) => {
      return (
        <Card
          key={item.id}
          segment={item}
          onSegmentSelect={handleNavigationToPlayer}
        />
      );
    },
    [handleNavigationToPlayer],
  );

  const getItemCount = useCallback(() => {
    return segments.length;
  }, [segments]);

  const getItem = useCallback((data: Segment[], idx: number) => {
    return data[idx];
  }, []);

  const keyExtractor = useCallback((item: Segment) => {
    return item.id;
  }, []);

  return (
    <SafeAreaView testID="home-view" style={styles.container}>
      {isLoading && <Text>Loading...</Text>}
      {segments.length > 0 && (
        <VirtualizedList
          testID="segments-list"
          removeClippedSubviews={true}
          data={segments}
          initialNumToRender={3}
          maxToRenderPerBatch={3}
          updateCellsBatchingPeriod={300}
          keyExtractor={keyExtractor}
          getItem={getItem}
          getItemCount={getItemCount}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};
