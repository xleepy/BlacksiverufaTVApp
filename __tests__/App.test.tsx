import 'react-native';
import React from 'react';
import App from '../App';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react-native';

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

it('should navigate to test', async () => {
  const { findByTestId, queryByTestId } = render(<App />);

  const element = await findByTestId('test');
  fireEvent.press(element);

  const player = queryByTestId('test-player');

  await waitFor(() => {
    expect(player).toBeDefined();
  });

  expect(screen.toJSON()).toMatchSnapshot();
});
