import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { Host } from 'react-native-portalize';

import { InfoCastModal } from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('InfoCastModal component', () => {
  const fakeFunction = jest.fn();

  it('renders correctly', () => {
    const { getByText } = render(
      <Host>
        <InfoCastModal isVisible onClose={fakeFunction} />
      </Host>,
    );

    expect(getByText('Got it!')).toBeDefined();
  });
});
