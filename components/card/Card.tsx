import React, { useCallback } from 'react';
import { Segment } from '../home/hooks';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

type Props = {
  segment: Segment;
  onSegmentSelect: (segment: Segment) => void;
};

const styles = StyleSheet.create({
  card: {
    borderBottomColor: 'black',
    padding: 10,
    gap: 10,
  },
});

export const Card = ({ segment, onSegmentSelect }: Props) => {
  const handlePress = useCallback(() => {
    onSegmentSelect(segment);
  }, [onSegmentSelect, segment]);

  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={styles.card}>
        <Text>{segment.name}</Text>
      </View>
    </TouchableHighlight>
  );
};
