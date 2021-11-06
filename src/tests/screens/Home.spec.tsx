import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { Host } from 'react-native-portalize';
import { ShowContext } from '../../contexts/ShowContext';
import { Home } from '../../screens/Home/index';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});

describe('Home screen component', () => {
  const generalInfo = {
    id: 1,
    name: 'Powerpuff girls',
    image: {
      medium: 'fake-image',
      original: 'fake-image',
    },
    genres: ['fake-genre-1', 'fake-genre-2'],
    premiered: 'fake-date',
    rating: {
      average: 10,
    },
    summary: 'fake-summary',
  };

  const seasons = [
    {
      id: 1,
      name: 'fake-season',
    },
  ];

  const episodes = [
    {
      id: 1,
      name: 'fake-episode',
    },
  ];

  it('renders correctly', () => {
    const { getByText } = render(
      <ShowContext.Provider value={{ generalInfo, seasons, episodes } as any}>
        <Host>
          <Home />
        </Host>
      </ShowContext.Provider>,
    );

    expect(getByText('Powerpuff girls')).toBeDefined();
  });

  it('expands/minimizes summary when press on arrow button', () => {
    const { getByA11yLabel } = render(
      <ShowContext.Provider value={{ generalInfo, seasons, episodes } as any}>
        <Host>
          <Home />
        </Host>
      </ShowContext.Provider>,
    );

    const button = getByA11yLabel('expand-summary');

    fireEvent.press(button);

    const summary = getByA11yLabel('summary');

    expect(summary.props.numberOfLines).toBe(undefined);
  });

  it('shows the info cast modal when press on info button', () => {
    const { getByA11yLabel, queryByText } = render(
      <ShowContext.Provider value={{ generalInfo, seasons, episodes } as any}>
        <Host>
          <Home />
        </Host>
      </ShowContext.Provider>,
    );

    const button = getByA11yLabel('info-button');
    fireEvent.press(button);

    const infoButton = queryByText('Got it!');

    expect(infoButton).toBeDefined();
  });

  it('closes the info cast modal when press on got it button', () => {
    const { getByA11yLabel, getByText } = render(
      <ShowContext.Provider value={{ generalInfo, seasons, episodes } as any}>
        <Host>
          <Home />
        </Host>
      </ShowContext.Provider>,
    );

    const button = getByA11yLabel('info-button');
    fireEvent.press(button);

    const infoButton = getByText('Got it!');

    fireEvent.press(infoButton);

    expect(getByText('Powerpuff girls')).toBeDefined();
  });

  it('shows the select seasons modal when press on season button', () => {
    const { getByTestId } = render(
      <ShowContext.Provider value={{ generalInfo, seasons, episodes } as any}>
        <Host>
          <Home />
        </Host>
      </ShowContext.Provider>,
    );

    const button = getByTestId('select-season-button');
    fireEvent.press(button);

    const seasonButton = getByTestId('1');

    expect(seasonButton).toBeDefined();
  });

  it('closes the select seasons modal when select a season', () => {
    const { getByA11yLabel, getByText, getByTestId } = render(
      <ShowContext.Provider value={{ generalInfo, seasons, episodes } as any}>
        <Host>
          <Home />
        </Host>
      </ShowContext.Provider>,
    );

    const button = getByA11yLabel('info-button');
    fireEvent.press(button);

    const seasonButton = getByTestId('1');

    fireEvent.press(seasonButton);

    expect(getByText('Powerpuff girls')).toBeDefined();
  });
});
