declare namespace ShowContext {
  interface Data {
    isLoading: boolean;
    errorOnLoadData: boolean;
    loadData: () => Promise<void>;
    generalInfo: TVShow.GeneralInfo;
    cast: TVShow.Cast[];
    seasons: TVShow.Season[];
    episodes: TVShow.Episode[];
  }
}
