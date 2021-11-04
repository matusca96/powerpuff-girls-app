import { getRandomFallbackImage } from '../utils/getRandomFallbackImage';

interface ShowData {
  generalInfo: TVShow.GeneralInfo;
  cast: TVShow.Cast[];
  seasons: TVShow.Season[];
  episodes: TVShow.Episode[];
}

export const getShowData = async (): Promise<ShowData> => {
  const response = await fetch(
    'https://api.tvmaze.com/shows/6771?embed[]=cast&embed[]=seasons&embed[]=episodes',
    {
      method: 'get',
    },
  );

  const data = (await response.json()) as TVShow.Show;
  const {
    _embedded: { cast, seasons, episodes },
    ...rest
  } = data;

  const generalInfo = rest;

  cast.forEach((castItem) => {
    const randomImage = getRandomFallbackImage();

    if (!castItem.character.image) {
      castItem.character.image = {
        medium: randomImage,
        original: randomImage,
        isFallback: true,
      };
    } else {
      castItem.character.image.isFallback = false;
    }
  });

  episodes.forEach((episode) => {
    const randomImage = getRandomFallbackImage();

    if (!episode.image) {
      episode.image = {
        medium: randomImage,
        original: randomImage,
        isFallback: true,
      };
    } else {
      episode.image.isFallback = false;
    }
  });

  return {
    generalInfo,
    cast,
    seasons,
    episodes,
  };
};
