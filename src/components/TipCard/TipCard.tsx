import React from 'react';

import Tip from '../../types/tip';

interface TipCardPropsType {
  tip: Tip;
}

const TipCard = ({ tip }: TipCardPropsType) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{tip.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">von {tip.author || 'Anonym'}</h6>
        <p className="card-text">{tip.description}</p>
      </div>
    </div>
  );
};

export default TipCard;
