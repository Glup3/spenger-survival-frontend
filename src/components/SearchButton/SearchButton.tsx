import React from 'react';

import { useData } from '../../context/dataContext';
import LoadingSpinner from '../LoadingSpinner';

const SearchButton = () => {
  const data = useData();

  const onClick = () => {
    data.fetchInitialTips();
  };

  return (
    <>
      {data.isLoading && (
        <div className="mr-2 mt-1">
          <LoadingSpinner />
        </div>
      )}
      <button className="btn btn-primary" onClick={onClick}>
        Suchen
      </button>
    </>
  );
};

export default SearchButton;
