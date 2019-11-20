import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import StackGrid from 'react-stack-grid';

import Tip from '../../types/tip';
import TipCard from '../TipCard';

const TipsGrid = () => {
  const [tips, setTips] = useState<Tip[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    axios.get<any, AxiosResponse<Tip[]>>(`${process.env.REACT_APP_BACKEND_URL}/tips`).then(res => {
      setTips(res.data);
    });
  }, []);

  return (
    <StackGrid columnWidth={250} gutterWidth={10} gutterHeight={10}>
      {tips.map(tip => (
        <TipCard key={`tip-${tip.id}`} tip={tip} />
      ))}
    </StackGrid>
  );
};

export default TipsGrid;
