import { useEffect, useState } from 'react';
import { SEGMENTS_PATH } from '@env';

export type Segment = {
  youtube?: string;
  name: string;
  date: string;
  games: string[];
  note?: string;
  direct?: string;
  hls?: string;
  subtitles?: string;
  id: string;
};

export function useSegments() {
  const [segments, setSegments] = useState<Segment[]>();
  useEffect(() => {
    let ignore = false;
    fetch(SEGMENTS_PATH)
      .then(res => res.json())
      .then(result => {
        if (ignore) {
          return;
        }
        const allVideos: Segment[] = Object.entries<Record<string, Segment>>(
          result,
        ).map(([key, segment]) => {
          return { ...segment, id: key } as Segment;
        });
        setSegments(allVideos);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return segments ?? [];
}
