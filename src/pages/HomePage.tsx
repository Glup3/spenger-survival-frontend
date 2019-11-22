import React from 'react';

import Searchbar from '../components/Searchbar';
import TipsCounter from '../components/TipsCounter/TipsCounter';
import InfiniteScroller from '../components/InfiniteScroller';

const HomePage = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-center">Tipps von Spengergassler</h1>
      <div className="container my-4">
        <Searchbar />
        <TipsCounter />
      </div>
      <InfiniteScroller />
    </div>
  );
};

export default HomePage;
