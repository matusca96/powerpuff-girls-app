import { useContext } from 'react';
import { ShowContext } from '../contexts/ShowContext';

const useShow = (): ShowContext.Data => {
  const context = useContext(ShowContext);

  if (context === undefined || Object.keys(context).length === 0) {
    throw new Error('useShow must be used within a ShowProvider');
  }

  return context;
};

export default useShow;
