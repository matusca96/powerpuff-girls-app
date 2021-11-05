declare namespace Routes {
  // interface not working
  type RootStackParamList = {
    Home: undefined;
    EpisodeDetails: {
      episode: TVShow.Episode;
    };
  };
}
