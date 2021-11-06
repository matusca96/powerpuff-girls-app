declare namespace ShowContext {
  interface Data {
    isLoading: boolean;
    errorOnLoadData: boolean;
    generalInfo: TVShow.GeneralInfo;
    cast: TVShow.Cast[];
    seasons: TVShow.Season[];
    episodes: TVShow.Episode[];
  }
}
