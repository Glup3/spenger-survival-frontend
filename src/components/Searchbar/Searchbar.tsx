import React from 'react';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useInput from '../../hooks/input-hook';
import { useData } from '../../context/dataContext';

const Searchbar = () => {
  const { value, bind, reset } = useInput('');
  const data = useData();

  const onSubmit = async e => {
    e.preventDefault();

    data.fetchInitialTips(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-group">
        <input
          className={`form-control ${value === '' ? 'border-dark' : 'border-primary'}`}
          type="text"
          placeholder="Titel / Beschreibung / Klasse / Autor / Abteilung  suchen..."
          aria-label="Search"
          {...bind}
        />
        <div className="input-group-append">
          {value === '' ? (
            <button className="btn btn-outline-dark" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          ) : (
            <button className="btn btn-outline-primary" type="button" onClick={() => reset()}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
