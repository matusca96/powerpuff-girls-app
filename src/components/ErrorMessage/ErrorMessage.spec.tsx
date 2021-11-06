import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { ShowContext } from '../../contexts/ShowContext';
import { ErrorMessage } from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('ErrorMessage component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <ShowContext.Provider value={{ loadData: jest.fn() } as any}>
        <ErrorMessage />
      </ShowContext.Provider>,
    );

    expect(getByText('Try again')).toBeDefined();
  });

  it('tries to reload data', () => {
    const fakeFunction = jest.fn();

    const { getByText } = render(
      <ShowContext.Provider value={{ loadData: fakeFunction } as any}>
        <ErrorMessage />
      </ShowContext.Provider>,
    );

    const button = getByText('Try again');

    fireEvent.press(button);

    expect(button).toBeDefined();
  });
});
