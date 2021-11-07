import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import { App } from '../App';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}));

describe('App component', () => {
  it('renders correctly before load fonts', () => {
    jest.mock('@expo-google-fonts/inter', () => ({
      useFonts: jest.fn(() => [false]),
      Inter_300Light: 'Inter_300Light',
      Inter_400Regular: 'Inter_400Regular',
      Inter_500Medium: 'Inter_500Medium',
      Inter_700Bold: 'Inter_700Bold',
      Inter_900Black: 'Inter_900Black',
    }));

    const { queryByText } = render(<App />);

    expect(queryByText('AppLoading')).toBeDefined();
  });

  it('renders correctly after load fonts', () => {
    jest.mock('@expo-google-fonts/inter', () => ({
      useFonts: jest.fn(() => [true]),
      Inter_300Light: 'Inter_300Light',
      Inter_400Regular: 'Inter_400Regular',
      Inter_500Medium: 'Inter_500Medium',
      Inter_700Bold: 'Inter_700Bold',
      Inter_900Black: 'Inter_900Black',
    }));

    const { queryByText } = render(<App />);

    expect(queryByText('Cast & Characters')).toBeDefined();
  });
});
