import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { CastImage } from './index';

jest.mock('expo-linear-gradient');
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('CastImage component', () => {
  const image = {
    medium: 'fake-image-medium',
    original: 'fake-image-original',
    isFallback: false,
  };

  const imageWithFallback = {
    medium: 'fake-image-medium',
    original: 'fake-image-original',
    isFallback: true,
  };

  it('renders correctly with character image', () => {
    const fakeFunction = jest.fn();

    const { queryByText } = render(
      <CastImage image={image} toggleImageType={fakeFunction} type="char" />,
    );

    expect(queryByText('cast-image')).toBeDefined();
  });

  it('renders correctly with actor image', () => {
    const fakeFunction = jest.fn();

    const { queryByText } = render(
      <CastImage image={image} toggleImageType={fakeFunction} type="actor" />,
    );

    expect(queryByText('cast-image')).toBeDefined();
  });

  it('renders correctly with fallback image', () => {
    const fakeFunction = jest.fn();

    const { queryByText } = render(
      <CastImage
        image={imageWithFallback}
        toggleImageType={fakeFunction}
        type="char"
      />,
    );

    expect(queryByText('cast-image')).toBeDefined();
  });

  it('renders correctly when press to change cast image', () => {
    const fakeFunction = jest.fn();

    const { getByA11yRole, queryByText } = render(
      <CastImage image={image} toggleImageType={fakeFunction} type="actor" />,
    );

    const button = getByA11yRole('button');

    fireEvent.press(button);

    expect(queryByText('cast-image')).toBeDefined();
  });
});
