import React from 'react';

import Tip from '../../types/tip';
import { getDate, getTime } from '../../util/dateHelper';
import GenderIcon from '../GenderIcon/GenderIcon';

interface TipCardPropsType {
  tip: Tip;
}

const TipCard = ({ tip }: TipCardPropsType) => {
  return (
    <div className={`card ${tip.verified && 'border-danger'}`}>
      <div className="card-body">
        <h5 className="card-title">{tip.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          <span>von {tip.author || 'Anonym'} </span>
          <GenderIcon gender={tip.gender} />
        </h6>
        <p className="card-text">{tip.description}</p>
        <p className="card-text">
          <small className="text-muted">
            {getDate(tip.issueDate)} {getTime(tip.issueDate)}
          </small>
        </p>
      </div>
    </div>
  );
};

export default TipCard;
