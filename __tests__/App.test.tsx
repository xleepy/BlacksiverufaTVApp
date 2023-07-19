/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { render } from '@testing-library/react-native';

jest.mock('../components/home/hooks.ts', () => {
  return {
    useSegments: () => [
      { youtube: 'test', name: 'test', direct: 'test', id: 'test' },
    ],
  };
});

it('renders correctly', () => {
  const { toJSON } = render(<App />);
  expect(toJSON()).toMatchSnapshot();
});
