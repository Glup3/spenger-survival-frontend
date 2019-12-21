import React from 'react';
import DropdownSelect from 'react-dropdown-select';

import { useData } from '../../../context/dataContext';

const SelectSchoolClass = () => {
  const data = useData();

  const onChange = (values: DropdownSelectOption[]) => {
    data.setSchoolClassOption(values[0]);
  };

  return (
    <div className="form-group">
      <label htmlFor="schoolClassSelect">Klasse</label>
      <DropdownSelect
        id="schoolClassSelect"
        searchable={true}
        closeOnScroll={true}
        options={[{ label: 'Alle', value: '' }].concat(data.allSchoolClasses)}
        values={[data.schoolClassOption]}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectSchoolClass;
