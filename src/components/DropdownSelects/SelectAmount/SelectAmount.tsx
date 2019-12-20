import React from 'react';
import DropdownSelect from 'react-dropdown-select';

import { useData } from '../../../context/dataContext';

const SelectAmount = () => {
  const data = useData();

  const options: DropdownSelectOption[] = [
    { label: '5', value: '5' },
    { label: '10', value: '10' },
    { label: '15', value: '15' },
    { label: '20', value: '20' },
    { label: '25', value: '25' },
  ];

  const onChange = (values: DropdownSelectOption[]) => {
    data.setAmountOption(values[0]);
  };

  return (
    <div className="form-group">
      <label htmlFor="amountSelect">Tipps pro Seite</label>
      <DropdownSelect
        id="amountSelect"
        searchable={false}
        closeOnScroll={true}
        options={options}
        values={[data.amountOption]}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectAmount;
