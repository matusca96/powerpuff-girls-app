export const getShowData = async (): Promise<TVShow.Show> => {
  const response = await fetch(
    'https://api.tvmaze.com/shows/6771?embed[]=cast&embed[]=seasons&embed[]=episodes',
    {
      method: 'get',
    },
  );

  const data = (await response.json()) as TVShow.Show;

  return data;
};
