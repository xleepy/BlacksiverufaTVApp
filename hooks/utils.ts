import { useCallback, useEffect, useMemo, useRef } from 'react';
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

export function useEventCallback(
  fn: (...args: any) => any,
  dependencies: any[],
) {
  const ref = useRef<(...args: any[]) => any>(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });

  useEffect(() => {
    ref.current = fn;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fn, ...dependencies]);

  return useCallback(() => {
    const currentFn = ref.current;
    return currentFn();
  }, []);
}
