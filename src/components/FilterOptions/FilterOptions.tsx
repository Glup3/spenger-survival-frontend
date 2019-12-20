import React from 'react';

import SelectVerified from '../DropdownSelects/SelectVerified';
import SelectDepartment from '../DropdownSelects/SelectDepartment';
import SelectGender from '../DropdownSelects/SelectGender';
import SelectCategory from '../DropdownSelects/SelectCategory';
import SelectAmount from '../DropdownSelects/SelectAmount';
import SelectOrderBy from '../DropdownSelects/SelectOrderBy';
import SelectSchoolClass from '../DropdownSelects/SelectSchoolClass';
import SelectAuthor from '../DropdownSelects/SelectAuthor';
import Searchbar from '../Searchbar';
import TipsCounter from '../TipsCounter/TipsCounter';

const FilterOptions = () => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <Searchbar />
        </div>

        <div className="col-sm-6">
          <SelectAuthor />
        </div>

        <div className="col-sm-6">
          <SelectGender />
        </div>

        <div className="col-sm-6">
          <SelectDepartment />
        </div>

        <div className="col-sm-6">
          <SelectSchoolClass />
        </div>

        <div className="col-sm-3">
          <SelectCategory />
        </div>

        <div className="col-sm-3">
          <SelectVerified />
        </div>

        <div className="col-sm-3">
          <SelectOrderBy />
        </div>

        <div className="col-sm-3">
          <SelectAmount />
        </div>

        <div className="col-sm-6">
          <TipsCounter />
        </div>

        <div className="col-sm-6 justify-content-end d-flex">
          <button className="btn btn-primary">Suchen</button>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
