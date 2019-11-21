import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-lodash-debounce';

interface SearchbarPropsType {
  handleInput: Function;
}

const Searchbar = ({ handleInput }: SearchbarPropsType) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const debouncedSearchInput = useDebounce(searchInput, 250);

  useEffect(() => {
    handleInput(debouncedSearchInput);
  }, [debouncedSearchInput, handleInput]);

  return (
    <input
      className="form-control form-control-sm"
      type="text"
      placeholder="Titel oder Klasse suchen..."
      aria-label="Search"
      onChange={e => {
        setSearchInput(e.target.value);
      }}
      value={searchInput}
    />
  );
};

export default Searchbar;
