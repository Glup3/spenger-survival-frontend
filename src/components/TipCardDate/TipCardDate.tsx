import React from 'react';

import { getDate, getTime } from '../../util/dateHelper';

interface TipCardDatePropsType {
  issueDate: Date;
}

const TipCardDate = ({ issueDate }: TipCardDatePropsType) => {
  return (
    <small className="text-muted">
      {getDate(issueDate)} {getTime(issueDate)}
    </small>
  );
};

export default TipCardDate;
