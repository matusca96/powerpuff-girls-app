import React from 'react';
import { render } from '@testing-library/react-native';

import { Loading } from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Loading component', () => {
  it('renders correctly', () => {
    const { getByA11yLabel } = render(<Loading />);

    expect(getByA11yLabel('heart-icon')).toBeDefined();
  });
});
