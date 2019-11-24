import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { useAlert } from 'react-alert';

import { useData } from '../../context/dataContext';

import './ReportButton.scss';

interface ReportButtonPropsType {
  id: number;
  title: string;
}

const ReportButton = ({ id, title }: ReportButtonPropsType) => {
  const data = useData();
  const alert = useAlert();

  const onClick = () => {
    alert.show(`"${title}" wurde gemeldet.`);
    data.reportTip(id, title, 'Dieser Tipp scheint ein Problem zu haben. Bitte mal anschauen :)');
  };

  return (
    <span onClick={onClick} className="report-flag" data-toggle="tooltip" data-placement="top" title="melden">
      <FontAwesomeIcon className="report-btn" icon={faFlag} size="sm" />
    </span>
  );
};

export default ReportButton;
