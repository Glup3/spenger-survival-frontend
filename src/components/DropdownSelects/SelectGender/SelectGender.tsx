import React from 'react';
import DropdownSelect from 'react-dropdown-select';

import { useData } from '../../../context/dataContext';
import { genderOptions } from '../../../constants';

const SelectGender = () => {
  const data = useData();

  const onChange = (values: DropdownSelectOption[]) => {
    data.setGenderOption(values[0]);
  };

  return (
    <div className="form-group">
      <label htmlFor="genderSelect">Geschlecht</label>
      <DropdownSelect
        id="genderSelect"
        searchable={false}
        closeOnScroll={true}
        options={[{ label: 'Alle', value: '' }].concat(genderOptions)}
        values={[data.genderOption]}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectGender;
