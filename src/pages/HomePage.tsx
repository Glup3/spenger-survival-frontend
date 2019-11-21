import React, { useEffect, useState } from 'react';

import TipsGrid from '../components/TipsGrid';
import Tip from '../types/tip';
import Searchbar from '../components/Searchbar';
import { useData } from '../context/dataContext';

const HomePage = () => {
  const [tips, setTips] = useState<Tip[]>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const data = useData();

  useEffect(() => {
    const fetchInitialTips = async () => {
      const result = await data.getTips();
      setTips(result.rows);
    };

    fetchInitialTips();
  }, [data]);

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
