import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import TipsGrid from '../components/TipsGrid';
import Tip from '../types/tip';

const HomePage = () => {
  const [tips, setTips] = useState<Tip[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      axios.interceptors.response.use(
        response => {
          for (let i = 0; i < response.data.length; i++) {
            response.data[i].issueDate = new Date(response.data[i].issueDate);
          }

          return response;
        },
        error => {
          return Promise.reject(error);
        }
      );
      const res = await axios.get<any, AxiosResponse<Tip[]>>(`${process.env.REACT_APP_BACKEND_URL}/tips`);

      setTips(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <h1 className="text-center mb-6">Home Page</h1>
      <TipsGrid tips={tips} />
    </div>
  );
};

export default HomePage;
