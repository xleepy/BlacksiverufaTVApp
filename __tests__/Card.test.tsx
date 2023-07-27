import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { Card } from '../components/card/Card';
import { Segment } from '../components/home/hooks';

describe('Card component tests', () => {
  const mockSegment: Segment = {
    id: 'test',
    games: [],
    date: '2015-08-10',
    name: 'test',
  };
  const pressMock = jest.fn();

  it('should render', () => {
    const { toJSON } = render(
      <Card segment={mockSegment} onSegmentSelect={pressMock} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
