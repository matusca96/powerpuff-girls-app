import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import { EpisodeCard } from './index';

describe('EpisodeCard component', () => {
  const episode = {
    id: '1',
    name: 'fake-episode-name',
    number: 1,
  };

  const fakeFunction = jest.fn();

  it('renders correctly', () => {
    const { queryByText } = render(
      <EpisodeCard episode={episode as any} onSelectEpisode={fakeFunction} />,
    );

    expect(queryByText('fake-episode-name')).toBeDefined();
  });
});
