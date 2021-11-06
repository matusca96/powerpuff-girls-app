import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Host } from 'react-native-portalize';
import { ShowContext } from '../contexts/ShowContext';
import { Routes } from '.';

describe('Routes component', () => {
  const generalInfo = {
    id: 1,
    name: 'Powerpuff girls',
    summary: 'fake-summary',
    premiered: '2021-05-11',
    genres: ['fake-genre-1', 'fake-genre-2'],
    rating: {
      average: 10,
    },
    image: {
      medium: 'fake-image',
      original: 'fake-image',
    },
  };

  const cast = [
    {
      id: 1,
      character: {
        id: 1,
        name: 'fake-character',
      },
      person: {
        id: 1,
        name: 'fake-person',
      },
    },
  ];

  const seasons = [
    {
      id: 1,
      name: 'fake-season',
      number: 1,
    },
  ];

  const episodes = [
    {
      id: 1,
      name: 'fake-episode',
      number: 1,
      season: 1,
    },
  ];

  it('renders correctly', () => {
    const { getByText } = render(
      <ShowContext.Provider
        value={
          { isLoading: false, generalInfo, cast, seasons, episodes } as any
        }
      >
        <NavigationContainer>
          <Host>
            <Routes />
          </Host>
        </NavigationContainer>
      </ShowContext.Provider>,
    );

    expect(getByText('Powerpuff girls')).toBeDefined();
  });

  it('renders correctly while loading', () => {
    const { getByA11yLabel } = render(
      <ShowContext.Provider value={{ isLoading: true } as any}>
        <NavigationContainer>
          <Host>
            <Routes />
          </Host>
        </NavigationContainer>
      </ShowContext.Provider>,
    );

    expect(getByA11yLabel('heart-icon')).toBeDefined();
  });
});
