import React, { createContext, ReactNode, useEffect, useState } from 'react';
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

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      try {
        const data = await getShowData();
        setGeneralInfo(data.generalInfo);
        setCast(data.cast);
        setSeasons(data.seasons);
        setEpisodes(data.episodes);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <ShowContext.Provider
      value={{ isLoading, generalInfo, cast, seasons, episodes }}
    >
      {children}
    </ShowContext.Provider>
  );
};
