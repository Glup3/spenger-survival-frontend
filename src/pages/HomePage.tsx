import React from 'react';

import Searchbar from '../components/Searchbar';
import TipsCounter from '../components/TipsCounter/TipsCounter';
import InfiniteScroller from '../components/InfiniteScroller';
import ReportModal from '../components/ReportModal';

const HomePage = () => {
  return (
    <div className="container-fluid mb-4">
      <h1 className="text-center">Tipps für die HTL Spengergasse</h1>
      <div className="container my-5">
        <Searchbar />
        <TipsCounter />
      </div>
      <ReportModal />
      <InfiniteScroller />
    </div>
  );
};

export default HomePage;
