import React from 'react';
import DropdownSelect from 'react-dropdown-select';

import { useData } from '../../../context/dataContext';

const SelectDepartment = () => {
  const data = useData();

  const options: DropdownSelectOption[] = [
    { label: '', value: 'Alle' },
    { label: 'Animation', value: 'Animation' },
    { label: 'Biomedizin', value: 'Biomedizin' },
    { label: 'Fachschule Informatik', value: 'Fachschule Informatik' },
    { label: 'Gamedesign', value: 'Gamedesign' },
    { label: 'Interior- und Surfacedesign', value: 'Interior- und Surfacedesign' },
    { label: 'Informatik', value: 'Informatik' },
    { label: 'Kolleg', value: 'Kolleg' },
    { label: 'Wirtschaft', value: 'Wirtschaft' },
  ];

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
        options={options}
        values={[data.departmentOption]}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectDepartment;
