import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { ShowContext } from '../../contexts/ShowContext';

import { CastList } from './index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('CastList component', () => {
  const cast = [
    {
      character: {
        id: '1',
        name: 'fake-character-1',
        image: {
          original: 'fake-image',
        },
      },
      person: {
        id: '1',
        name: 'fake-person-1',
        image: {
          original: 'fake-image',
        },
      },
    },
    {
      character: {
        id: '2',
        name: 'fake-character-2',
        image: {
          original: 'fake-image',
        },
      },
      person: {
        id: '2',
        name: 'fake-person-2',
        image: {
          original: 'fake-image',
        },
      },
    },
  ];

  it('renders correctly', () => {
    const { getByA11yLabel } = render(
      <ShowContext.Provider value={{ cast } as any}>
        <CastList />
      </ShowContext.Provider>,
    );

    expect(getByA11yLabel('cast-list')).toBeDefined();
  });
});
