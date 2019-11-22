import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';

import './ReportButton.scss';

const ReportButton = () => {
  const onClick = () => {
    console.log('NOT YET IMPLEMENTED');
    // TODO implement me
  };

  return (
    <span onClick={onClick} className="report-flag" data-toggle="tooltip" data-placement="top" title="melden">
      <FontAwesomeIcon className="report-btn" icon={faFlag} size="sm" />
    </span>
  );
};

export default ReportButton;
