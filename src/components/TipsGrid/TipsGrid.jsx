import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TipsGrid = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + '/tips').then(res => {
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
