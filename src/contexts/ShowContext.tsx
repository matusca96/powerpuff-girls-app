import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { getShowData } from '../services/getShowData';

interface ShowProviderProps {
  children: ReactNode;
}

export const ShowContext = createContext({} as ShowContext.Data);

export const ShowProvider = ({ children }: ShowProviderProps): JSX.Element => {
  const [tvShow, setTvShow] = useState({} as TVShow.Show);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getShowData()
      .then((data) => {
        setTvShow(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ShowContext.Provider value={{ isLoading, tvShow }}>
      {children}
    </ShowContext.Provider>
  );
};
