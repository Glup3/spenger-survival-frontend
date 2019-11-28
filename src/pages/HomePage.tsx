import React from 'react';

import { Link } from 'react-router-dom';
import Searchbar from '../components/Searchbar';
import TipsCounter from '../components/TipsCounter/TipsCounter';
import InfiniteScroller from '../components/InfiniteScroller';
import ReportModal from '../components/ReportModal';

const HomePage = () => {
  return (
    <div className="container-fluid mb-4">
      <h1 className="text-center">Tipps um die Spengergasse zu überleben</h1>
      <div className="container my-5">
        <Searchbar />
        <div className="d-flex justify-content-between mt-2">
          <TipsCounter />
          <Link to="/tipp-abgeben">
            <button className="btn btn-primary">Tipp abgeben</button>
          </Link>
        </div>
      </div>
      <ReportModal />
      <InfiniteScroller />
    </div>
  );
};

export default HomePage;
