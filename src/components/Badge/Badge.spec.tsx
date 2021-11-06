import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import { Badge } from './index';

// Note: test renderer must be required after react-native.
describe('Badge component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Badge>fake-badge</Badge>);

    expect(getByText('fake-badge')).toBeDefined();
  });
});
