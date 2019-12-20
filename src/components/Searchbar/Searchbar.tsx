import React from 'react';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useInput from '../../hooks/input-hook';
import { useData } from '../../context/dataContext';
import { isEmptyOrSpaces } from '../../util/string-helper';

const Searchbar = () => {
  const { value, bind, reset } = useInput('');
  const data = useData();

  const onSubmit = async e => {
    e.preventDefault();

    data.fetchInitialTips(value);
  };

  const onClear = () => {
    reset();
    data.fetchInitialTips(null);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            className={`form-control ${value === '' ? 'border-dark' : 'border-primary'}`}
            type="text"
            placeholder="Textsuchen..."
            aria-label="Search"
            {...bind}
          />
          {data.isLoading && (
            <div className="input-group-append">
              <button className="btn btn-outline-primary">
                <div className="spinner-border spinner-border-sm text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </button>
            </div>
          )}
          {!isEmptyOrSpaces(value) && (
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button" onClick={onClear}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          )}
          <div className="input-group-append">
            <button
              className={`btn ${isEmptyOrSpaces(value) ? 'btn-outline-dark' : 'btn-outline-primary'}`}
              type="submit"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
