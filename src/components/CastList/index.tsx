import { CastCard } from '../CastCard';
import { Container, ListTitle } from './styles';

export const CastList = (): JSX.Element => {
  const data = [
    {
      person: {
        id: 1,
        name: 'Amanda Leighton',
        image: {
          original:
            'https://static.tvmaze.com/uploads/images/original_untouched/13/34371.jpg',
        },
      },
      character: {
        name: 'Blossom',
        image: {
          original:
            'https://static.tvmaze.com/uploads/images/original_untouched/25/64243.jpg',
        },
      },
    },
    {
      person: {
        id: 2,
        name: 'Kristen Li',
        image: {
          original:
            'https://static.tvmaze.com/uploads/images/original_untouched/25/64199.jpg',
        },
      },
      character: {
        name: 'Bubbles',
        image: {
          original:
            'https://static.tvmaze.com/uploads/images/original_untouched/25/64242.jpg',
        },
      },
    },
  ];

  return (
    <Container
      data={data}
      ListHeaderComponent={<ListTitle>Cast & Characters</ListTitle>}
      renderItem={({ item: castPerson }) => <CastCard />}
    />
  );
};
