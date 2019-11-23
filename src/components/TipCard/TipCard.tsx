import React from 'react';

import Tip from '../../types/tip';
import GenderIcon from '../GenderIcon/GenderIcon';

import './TipCard.scss';
import TipCardSchoolClass from '../TipCardSchoolClass';
import TipCardDate from '../TipCardDate';
import CardTitle from '../CardTitle';
import ReportButton from '../ReportButton';

interface TipCardPropsType {
  tip: Tip;
}

const TipCard = ({ tip }: TipCardPropsType) => {
  return (
    <div className="card tip-card">
      <div className="card-body">
        <CardTitle title={tip.title} verified={tip.verified} />
        <h6 className="card-subtitle mb-2 text-muted">
          <span>von {tip.author || 'Anonym'} </span>
          <GenderIcon gender={tip.gender} />
        </h6>
        <div className="card-text" dangerouslySetInnerHTML={{ __html: tip.description }}></div>
        <div className="card-text">
          <div className="float-left">
            <TipCardDate issueDate={tip.issueDate} />
          </div>
          <div className="float-right">
            <TipCardSchoolClass schoolClass={tip.schoolClass} department={tip.department} />
          </div>
          <div className="float-right mr-2">
            <ReportButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCard;
