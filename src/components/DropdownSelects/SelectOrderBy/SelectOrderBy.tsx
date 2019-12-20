import React from 'react';
import DropdownSelect from 'react-dropdown-select';

import { useData } from '../../../context/dataContext';

const SelectOrderBy = () => {
  const data = useData();

  const options: DropdownSelectOption[] = [
    { label: 'Neueste', value: 'DESC' },
    { label: 'Älteste', value: 'ASC' },
  ];

  const onChange = (values: DropdownSelectOption[]) => {
    data.setOrderByOption(values[0]);
  };

  return (
    <div className="form-group">
      <label htmlFor="orderBySelect">Datum</label>
      <DropdownSelect
        id="orderBySelect"
        searchable={true}
        closeOnScroll={true}
        options={options}
        values={[data.orderByOption]}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectOrderBy;
