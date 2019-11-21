import React from 'react';

import Tip from '../../types/tip';
import GenderIcon from '../GenderIcon/GenderIcon';

import './TipCard.scss';
import TipCardSchoolClass from '../TipCardSchoolClass';
import TipCardDate from '../TipCardDate';

interface TipCardPropsType {
  tip: Tip;
}

const TipCard = ({ tip }: TipCardPropsType) => {
  return (
    <div className={`card shadow ${tip.verified && 'border-danger'}`}>
      <div className="card-body">
        <h5 className="card-title">{tip.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          <span>von {tip.author || 'Anonym'} </span>
          <GenderIcon gender={tip.gender} />
        </h6>
        <p className="card-text">{tip.description}</p>
        <div className="card-text">
          <div className="float-left">
            <TipCardDate issueDate={tip.issueDate} />
          </div>
          <div className="float-right">
            <TipCardSchoolClass schoolClass={tip.schoolClass} department={tip.department} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCard;
