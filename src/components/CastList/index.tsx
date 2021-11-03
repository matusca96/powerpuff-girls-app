import React from 'react';

import { CastCard } from '../CastCard';
import { Container, ListTitle } from './styles';

export const CastList = (): JSX.Element => {
  const data: TVShow.Cast[] = [
    {
      person: {
        id: '1',
        name: 'Amanda Leighton',
        image: {
          medium:
            'https://static.tvmaze.com/uploads/images/original_untouched/13/34371.jpg',
          original:
            'https://static.tvmaze.com/uploads/images/original_untouched/13/34371.jpg',
        },
      },
      character: {
        id: '1',
        name: 'Blossom',
        image: {
          medium:
            'https://static.tvmaze.com/uploads/images/original_untouched/25/64243.jpg',
          original:
            'https://static.tvmaze.com/uploads/images/original_untouched/25/64243.jpg',
        },
      },
      self: false,
      voice: true,
    },
    {
      person: {
        id: '2',
        name: 'Kristen Li',
        image: {
          medium:
            'https://static.tvmaze.com/uploads/images/original_untouched/25/64199.jpg',
          original:
            'https://static.tvmaze.com/uploads/images/original_untouched/25/64199.jpg',
        },
      },
      character: {
        id: '2',
        name: 'Bubbles',
        image: {
          medium:
            'https://static.tvmaze.com/uploads/images/original_untouched/25/64242.jpg',
          original:
            'https://static.tvmaze.com/uploads/images/original_untouched/25/64242.jpg',
        },
      },
      self: false,
      voice: true,
    },
  ];

  return (
    <>
      <ListTitle>Cast & Characters</ListTitle>
      <Container
        data={data}
        renderItem={({ item: cast }) => <CastCard cast={cast} />}
        horizontal
      />
    </>
  );
};
