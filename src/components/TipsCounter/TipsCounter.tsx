import React from 'react';
import { useData } from '../../context/dataContext';

const TipsCounter = () => {
  const data = useData();

  return <h6 className="mt-2">Tipps gefunden: {data.tipsCount}</h6>;
};

export default TipsCounter;
