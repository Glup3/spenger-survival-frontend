import React from 'react';

import InfiniteScroller from '../components/InfiniteScroller';
import ReportModal from '../components/ReportModal';
import FilterOptions from '../components/FilterOptions';

const HomePage = () => {
  return (
    <div className="container-fluid mb-4">
      <h1 className="text-center">Tipps um die Spengergasse zu überleben</h1>
      <div className="container my-5">
        <FilterOptions />
      </div>
      <ReportModal />
      <InfiniteScroller />
    </div>
  );
};

export default HomePage;
