import React, { useState } from 'react';

interface SearchbarPropsType {
  handleInput: Function;
}

const Searchbar = ({ handleInput }: SearchbarPropsType) => {
  const [searchInput, setSearchInput] = useState<string>('');

  return (
    <input
      className="form-control form-control-sm"
      type="text"
      placeholder="Titel oder Klasse suchen..."
      aria-label="Search"
      onChange={e => {
        const { value } = e.target;
        setSearchInput(value);
        handleInput(value);
      }}
      value={searchInput}
    />
  );
};

export default Searchbar;
