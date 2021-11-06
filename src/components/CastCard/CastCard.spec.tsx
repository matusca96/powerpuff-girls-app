import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import { CastCard } from './index';

jest.mock('expo-linear-gradient');

describe('CastCard component', () => {
  const cast = {
    character: {
      id: '1',
      name: 'fake-character',
      image: {
        original: 'fake-image',
      },
    },
    person: {
      id: '1',
      name: 'fake-person',
      image: {
        original: 'fake-image',
      },
    },
  };

  it('renders correctly', () => {
    const { queryByText } = render(<CastCard cast={cast as any} />);

    expect(queryByText('fake-character')).toBeDefined();
  });
});
