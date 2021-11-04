declare namespace ShowContext {
  interface Data {
    isLoading: boolean;
    generalInfo: TVShow.GeneralInfo;
    cast: TVShow.Cast[];
    seasons: TVShow.Season[];
    episodes: TVShow.Episode[];
  }
}
