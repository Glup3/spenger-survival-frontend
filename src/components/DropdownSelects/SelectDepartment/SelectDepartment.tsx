import React from 'react';
import DropdownSelect from 'react-dropdown-select';

import { useData } from '../../../context/dataContext';
import { departmentOptions } from '../../../constants';

const SelectDepartment = () => {
  const data = useData();

  const onChange = (values: DropdownSelectOption[]) => {
    data.setDepartmentOption(values[0]);
  };

  return (
    <div className="form-group">
      <label htmlFor="departmentSelect">Abteilung</label>
      <DropdownSelect
        id="departmentSelect"
        searchable={true}
        closeOnScroll={true}
        options={[{ label: 'Alle', value: '' }].concat(departmentOptions)}
        values={[data.departmentOption]}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectDepartment;
