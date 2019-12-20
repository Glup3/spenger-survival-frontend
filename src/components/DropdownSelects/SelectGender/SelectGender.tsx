import React from 'react';
import DropdownSelect from 'react-dropdown-select';

import { useData } from '../../../context/dataContext';

const SelectGender = () => {
  const data = useData();

  const options: DropdownSelectOption[] = [
    { label: 'Alle', value: '' },
    { label: 'Ohne', value: null },
    { label: 'Männlich', value: 'm' },
    { label: 'Divers', value: '+' },
    { label: 'Weiblich', value: 'w' },
  ];

  const onChange = (values: DropdownSelectOption[]) => {
    data.setGenderOption(values[0]);
  };

  return (
    <div className="form-group">
      <label htmlFor="genderSelect">Geschlecht</label>
      <DropdownSelect
        id="genderSelect"
        searchable={true}
        closeOnScroll={true}
        options={options}
        values={[data.genderOption]}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectGender;
