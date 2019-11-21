import React, { useEffect } from 'react';
import $ from 'jquery';

import './TipCardSchoolClass.scss';

interface TipCardSchoolClassPropsType {
  schoolClass: string;
  department: string;
}

const TipCardSchoolClass = ({ schoolClass, department }: TipCardSchoolClassPropsType) => {
  useEffect(() => {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }, []);

  return (
    <small
      className="text-muted school-class"
      data-toggle="tooltip"
      data-placement="top"
      title={department || 'Allgemein'}
    >
      {schoolClass || 'Unbekannt'}
    </small>
  );
};

export default TipCardSchoolClass;
