import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ShowProvider } from '../../contexts/ShowContext';

describe('ShowContext component', () => {
  it('renders correctly', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            id: '1',
            genres: ['fake-genre-1', 'fake-genre-2'],
            image: {
              original: 'fake-image',
            },
            name: 'fake-name',
            premiered: '2021-05-11',
            rating: {
              average: 10,
            },
            summary: 'fake-summary',
            _embedded: {
              cast: [
                {
                  character: {
                    id: '1',
                    name: 'fake-character-name',
                    image: {
                      original: 'fake-image',
                    },
                  },
                  person: {
                    id: '1',
                    name: 'fake-person-name',
                    image: {
                      original: 'fake-image',
                    },
                  },
                },
                {
                  character: {
                    id: '2',
                    name: 'fake-character-name',
                  },
                  person: {
                    id: '2',
                    name: 'fake-person-name',
                  },
                },
              ],
              seasons: [
                {
                  id: '1',
                  name: 'fake-season-name',
                },
              ],
              episodes: [
                {
                  id: '1',
                  name: 'fake-episode-name',
                },
                {
                  id: '2',
                  name: 'fake-episode-name',
                  image: {
                    medium: 'fake-image',
                    original: 'fake-image',
                  },
                },
              ],
            },
          }),
      }),
    ) as jest.Mock;

    const { getByText } = render(
      <ShowProvider>
        <Text>Powerpuff girls</Text>
      </ShowProvider>,
    );

    const text = await waitFor(() => getByText('Powerpuff girls'));

    expect(text).toBeDefined();
  });

  it('catches an error if api is not working', async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Something went wrong')),
    ) as jest.Mock;

    const { getByText } = render(
      <ShowProvider>
        <Text>Powerpuff girls</Text>
      </ShowProvider>,
    );

    const text = await waitFor(() => getByText('Powerpuff girls'));

    expect(text).toBeDefined();
  });
});
