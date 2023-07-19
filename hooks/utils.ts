import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
type Orientation = 'portrait' | 'landscape';

export function useOrientation(): Orientation {
  const windowDimensions = useWindowDimensions();
  return useMemo<Orientation>(() => {
    return windowDimensions.height >= windowDimensions.width
      ? 'portrait'
      : 'landscape';
  }, [windowDimensions]);
}
