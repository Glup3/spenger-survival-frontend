import React from 'react';
import DropdownSelect from 'react-dropdown-select';

import { useData } from '../../../context/dataContext';

const SelectAuthor = () => {
  const data = useData();

  const onChange = (values: DropdownSelectOption[]) => {
    data.setAuthorOption(values[0]);
  };

  return (
    <div className="form-group">
      <label htmlFor="authorSelect">Autor</label>
      <DropdownSelect
        id="authorSelect"
        searchable={true}
        closeOnScroll={true}
        options={data.allAuthors}
        values={[data.authorOption]}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectAuthor;
