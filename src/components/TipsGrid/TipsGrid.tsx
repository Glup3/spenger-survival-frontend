import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import Tip from '../../types/tip';

const TipsGrid = () => {
  const [tips, setTips] = useState<Tip[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    axios.get<any, AxiosResponse<Tip[]>>(`${process.env.REACT_APP_BACKEND_URL}/tips`).then(res => {
      setTips(res.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {tips.map(tip => (
          <li key={`tip-${tip.id}`}>{tip.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TipsGrid;
