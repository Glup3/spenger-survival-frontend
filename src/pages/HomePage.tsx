import React from 'react';

import TipsGrid from '../components/TipsGrid';
import Searchbar from '../components/Searchbar';
import { useData } from '../context/dataContext';
import TipsCounter from '../components/TipsCounter/TipsCounter';

const HomePage = () => {
  const data = useData();

  return (
    <div className="container-fluid">
      <h1 className="text-center">Tipps von Spengergassler</h1>
      <div className="container mb-4">
        <Searchbar />
        <TipsCounter />
      </div>
      {!data.loading ? <TipsGrid tips={data.tips} /> : <h4>Loading...</h4>}
    </div>
  );
};

export default HomePage;
