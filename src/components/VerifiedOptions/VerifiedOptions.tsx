import React from 'react';
import DropdownSelect from 'react-dropdown-select';

import { useData } from '../../context/dataContext';

const VerifiedOptions = () => {
  const data = useData();

  const options: DropdownSelectOption[] = [
    { label: 'Alle', value: '' },
    { label: 'Verifiziert', value: '1' },
    { label: 'Unverifiziert', value: '0' },
  ];

  const onChange = (values: DropdownSelectOption[]) => {
    data.changeSearchOptionsAndSearch(values[0]);
  };

  return (
    <div className="form-group">
      <label htmlFor="verifiedSelect">Verifizierung</label>
      <DropdownSelect
        id="verifiedSelect"
        searchable={true}
        closeOnScroll={true}
        options={options}
        values={[options[0]]}
        onChange={onChange}
      />
    </div>
  );
};

export default VerifiedOptions;
