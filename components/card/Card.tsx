import React, { useCallback, useMemo, memo } from 'react';
import { Segment } from '../home/hooks';
import {
  ImageBackground,
  ImageProps,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

type Props = {
  segment: Segment;
  onSegmentSelect: (segment: Segment) => void;
};

const styles = StyleSheet.create({
  card: {
    borderBottomColor: 'black',
    padding: 10,
    gap: 10,
    height: 220,
    borderColor: 'rgba(0,0,0,.125)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 0.25,
  },
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    backgroundColor: 'rgb(52, 58, 64)',
    color: 'white',
    marginTop: 'auto',
    padding: 8,
    textAlign: 'justify',
  },
});

export const Card = memo(({ segment, onSegmentSelect }: Props) => {
  const handlePress = useCallback(() => {
    onSegmentSelect(segment);
  }, [onSegmentSelect, segment]);

  const source = useMemo<ImageProps['source']>(() => {
    if (segment.youtube) {
      return {
        uri: `https://img.youtube.com/vi/${segment.youtube}/mqdefault.jpg`,
        cache: 'default',
      };
    }
    return {
      uri: `https://bsufiles.drhx.ru/streams/${segment.id}-sm.jpg`,
      cache: 'default',
    };
  }, [segment]);

  return (
    <TouchableHighlight onPress={handlePress}>
      <View testID={segment.name} style={styles.card}>
        <ImageBackground
          resizeMode="cover"
          style={styles.image}
          source={source}>
          <Text style={styles.text}>{segment.name}</Text>
        </ImageBackground>
      </View>
    </TouchableHighlight>
  );
});
