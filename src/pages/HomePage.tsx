import React from 'react';

import Searchbar from '../components/Searchbar';
import TipsCounter from '../components/TipsCounter/TipsCounter';
import InfiniteScroller from '../components/InfiniteScroller';

const HomePage = () => {
  return (
    <div className="container-fluid mb-4">
      <h1 className="text-center">Tipps von Spengergasslern</h1>
      <div className="container my-5">
        <Searchbar />
        <TipsCounter />
      </div>
      <InfiniteScroller />
    </div>
  );
};

export default HomePage;
