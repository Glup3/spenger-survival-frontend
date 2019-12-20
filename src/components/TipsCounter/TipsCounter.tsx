import React from 'react';
import { useData } from '../../context/dataContext';

const TipsCounter = () => {
  const data = useData();

  return <h5 className="mt-2">Tipps gefunden: {data.tipsCount}</h5>;
};

export default TipsCounter;
