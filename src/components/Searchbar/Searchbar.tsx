import React from 'react';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useData } from '../../context/dataContext';
import { isEmptyOrSpaces } from '../../util/string-helper';

const Searchbar = () => {
  const data = useData();

  const onSubmit = async e => {
    e.preventDefault();

    data.fetchInitialTips();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group form-group">
        <input
          className={`form-control ${data.searchTerm === '' ? 'border-dark' : 'border-primary'}`}
          type="text"
          placeholder="Textsuchen..."
          aria-label="Search"
          onChange={e => data.setSearchTerm(e.target.value)}
          value={data.searchTerm}
        />
        {!isEmptyOrSpaces(data.searchTerm) && (
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="button" onClick={() => data.setSearchTerm('')}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        )}
        <div className="input-group-append">
          <button
            className={`btn ${isEmptyOrSpaces(data.searchTerm) ? 'btn-outline-dark' : 'btn-outline-primary'}`}
            type="submit"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
