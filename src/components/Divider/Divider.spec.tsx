import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import { Divider } from './index';

describe('Divider component', () => {
  it('renders correctly', () => {
    const { getByA11yLabel } = render(<Divider orientation="horizontal" />);

    expect(getByA11yLabel('spacer')).toBeDefined();
  });
});
