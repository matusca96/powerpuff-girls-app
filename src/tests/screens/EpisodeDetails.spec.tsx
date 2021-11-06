import 'react-native';
import { BackHandler } from 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { ShowContext } from '../../contexts/ShowContext';
import { EpisodeDetails } from '../../screens/EpisodeDetails/index';

const fakeBackEvent = jest.fn();
BackHandler.addEventListener('hardwareBackPress', fakeBackEvent);

describe('EpisodeDetails screen component', () => {
  const seasons = [
    {
      id: '1',
      name: 'fake-season',
      number: 1,
    },
    {
      id: '2',
      name: 'fake-season',
      number: 2,
    },
  ];

  const episodes = [
    {
      id: '1',
      name: 'fake-episode-name',
      airdate: '2021-05-11',
      season: 1,
      number: 1,
      summary: 'fake-summary',
      image: {
        medium: 'fake-image',
        original: 'fake-image',
        isFallback: true,
      },
    },
    {
      id: '2',
      name: 'fake-episode-name',
      airdate: '2021-05-11',
      season: 1,
      number: 2,
      image: {
        medium: 'fake-image',
        original: 'fake-image',
        isFallback: false,
      },
    },
    {
      id: '3',
      name: 'fake-episode-name',
      airdate: '2021-05-11',
      season: 2,
      number: 1,
    },
    {
      id: '4',
      name: 'fake-episode-name',
      airdate: '2021-05-11',
      season: 2,
      number: 2,
    },
  ];

  const fakePushFunction = jest.fn();
  const navigation = { navigate: jest.fn(), push: fakePushFunction };

  it('renders correctly if it is the first episode of first season', () => {
    const episode = episodes[0]; // first episode/season

    const { queryByTestId } = render(
      <ShowContext.Provider value={{ seasons, episodes } as any}>
        <EpisodeDetails
          route={{ params: { episode } } as any}
          navigation={navigation as any}
        />
      </ShowContext.Provider>,
    );

    expect(queryByTestId('previous-button')).toBeNull();
    expect(queryByTestId('next-button')).toBeDefined();
  });

  it('renders correctly if it is the last episode of last season', () => {
    const episode = episodes[3]; // last episode/season

    const { queryByTestId } = render(
      <ShowContext.Provider value={{ seasons, episodes } as any}>
        <EpisodeDetails
          route={{ params: { episode } } as any}
          navigation={navigation as any}
        />
      </ShowContext.Provider>,
    );

    expect(queryByTestId('next-button')).toBeNull();
    expect(queryByTestId('previous-button')).toBeDefined();
  });

  it('renders correctly if it is a random episode excluding first and last', () => {
    const episode = episodes[1]; // middle episode

    const { queryByTestId } = render(
      <ShowContext.Provider value={{ seasons, episodes } as any}>
        <EpisodeDetails
          route={{ params: { episode } } as any}
          navigation={navigation as any}
        />
      </ShowContext.Provider>,
    );

    expect(queryByTestId('next-button')).toBeDefined();
    expect(queryByTestId('previous-button')).toBeDefined();
  });

  it('changes episode when go to previous episode when the current is the last one', () => {
    const episode = episodes[3]; // last episode/season

    const { getByTestId } = render(
      <ShowContext.Provider value={{ seasons, episodes } as any}>
        <EpisodeDetails
          route={{ params: { episode } } as any}
          navigation={navigation as any}
        />
      </ShowContext.Provider>,
    );

    const previousButton = getByTestId('previous-button');

    fireEvent.press(previousButton);

    expect(fakePushFunction).toHaveBeenCalled();
  });

  it("changes episode when go to previous episode when the current isn't the last one", () => {
    const episode = episodes[2]; // one before the last episode/season

    const { getByTestId } = render(
      <ShowContext.Provider value={{ seasons, episodes } as any}>
        <EpisodeDetails
          route={{ params: { episode } } as any}
          navigation={navigation as any}
        />
      </ShowContext.Provider>,
    );

    const previousButton = getByTestId('previous-button');

    fireEvent.press(previousButton);

    expect(fakePushFunction).toHaveBeenCalled();
  });

  it('changes episode when go to next episode when the current is the first one', () => {
    const episode = episodes[0]; // first episode/season

    const { getByTestId } = render(
      <ShowContext.Provider value={{ seasons, episodes } as any}>
        <EpisodeDetails
          route={{ params: { episode } } as any}
          navigation={navigation as any}
        />
      </ShowContext.Provider>,
    );

    const nextButton = getByTestId('next-button');

    fireEvent.press(nextButton);

    expect(fakePushFunction).toHaveBeenCalled();
  });

  it("changes episode when go to next episode when the current isn't the first one", () => {
    const episode = episodes[1]; // one after the first episode/season

    const { getByTestId } = render(
      <ShowContext.Provider value={{ seasons, episodes } as any}>
        <EpisodeDetails
          route={{ params: { episode } } as any}
          navigation={navigation as any}
        />
      </ShowContext.Provider>,
    );

    const nextButton = getByTestId('next-button');

    fireEvent.press(nextButton);

    expect(fakePushFunction).toHaveBeenCalled();
  });
});
