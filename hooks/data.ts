import { useEffect, useState } from 'react';
import { SEGMENTS_PATH } from '@env';

export type Segment = {
  youtube: string;
  name: string;
  date: string;
  games: string[];
  note?: string;
};

export function useSegments() {
  const [segments, setSegments] = useState<Segment[]>();
  useEffect(() => {
    fetch(SEGMENTS_PATH)
      .then(res => res.json())
      .then(result => {
        const allVideos: Segment[] = Object.values(result);
        setSegments(allVideos);
      });
  }, []);

  return segments ?? [];
}
