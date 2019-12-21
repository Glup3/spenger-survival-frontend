import React from 'react';
import DropdownSelect from 'react-dropdown-select';

import { useData } from '../../../context/dataContext';

const SelectCategory = () => {
  const data = useData();

  const onChange = (values: DropdownSelectOption[]) => {
    data.setCategoryOption(values[0]);
  };

  return (
    <div className="form-group">
      <label htmlFor="categorySelect">Kategorie</label>
      <DropdownSelect
        id="categorySelect"
        searchable={true}
        closeOnScroll={true}
        loading={data.isCategoriesLoading}
        disabled={data.isCategoriesLoading}
        options={[
          { label: 'Alle', value: '' },
          { label: 'Keine', value: null },
        ].concat(data.allCategories)}
        values={[data.categoryOption]}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectCategory;
