import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import TipsGrid from '../components/TipsGrid';
import Tip from '../types/tip';
import Searchbar from '../components/Searchbar';

const HomePage = () => {
  const [tips, setTips] = useState<Tip[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
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

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res = await axios.get<any, AxiosResponse<Tip[]>>(`${process.env.REACT_APP_BACKEND_URL}/tips`);

      setTips(res.data);
    };

    fetchData();
  }, []);

  const handleInputChange = (value: string) => {
    setSearchInput(value);
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center">Tipps von Spengergassler</h1>
      <div className="container mb-4">
        <Searchbar handleInput={handleInputChange} />
      </div>
      <TipsGrid tips={tips.filter(tip => tip.title.toLowerCase().includes(searchInput.toLowerCase()))} />
    </div>
  );
};

export default HomePage;
