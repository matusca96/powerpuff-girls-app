import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { getShowData } from '../services/getShowData';

interface ShowProviderProps {
  children: ReactNode;
}

export const ShowContext = createContext({} as ShowContext.Data);

export const ShowProvider = ({ children }: ShowProviderProps): JSX.Element => {
  const [generalInfo, setGeneralInfo] = useState({} as TVShow.GeneralInfo);
  const [cast, setCast] = useState<TVShow.Cast[]>([]);
  const [seasons, setSeasons] = useState<TVShow.Season[]>([]);
  const [episodes, setEpisodes] = useState<TVShow.Episode[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [errorOnLoadData, setErrorOnLoadData] = useState(false);

  const loadData = useCallback(async (): Promise<void> => {
    try {
      setErrorOnLoadData(false);

      const data = await getShowData();
      setGeneralInfo(data.generalInfo);
      setCast(data.cast);
      setSeasons(data.seasons);
      setEpisodes(data.episodes);

      setIsLoading(false);
    } catch (err) {
      setErrorOnLoadData(true);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <ShowContext.Provider
      value={{
        isLoading,
        errorOnLoadData,
        loadData,
        generalInfo,
        cast,
        seasons,
        episodes,
      }}
    >
      {children}
    </ShowContext.Provider>
  );
};
