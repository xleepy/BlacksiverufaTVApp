/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import { it, expect, jest } from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('../hooks/data', () => {
  return {
    useSegments: () => [{ youtube: 'test', name: 'test' }],
  };
});

it('renders correctly', () => {
  const render = renderer.create(<App />);
  expect(render.toJSON()).toMatchSnapshot();
});
