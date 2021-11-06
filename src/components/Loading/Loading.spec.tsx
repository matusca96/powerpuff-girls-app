import React from 'react';
import { render } from '@testing-library/react-native';

import { ShowContext } from '../../contexts/ShowContext';
import { Loading } from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Loading component', () => {
  it('renders correctly', () => {
    const { getByA11yLabel } = render(
      <ShowContext.Provider value={{ errorOnLoadData: false } as any}>
        <Loading />
      </ShowContext.Provider>,
    );

    expect(getByA11yLabel('heart-icon')).toBeDefined();
  });
});
