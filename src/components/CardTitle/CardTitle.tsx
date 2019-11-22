import React from 'react';

import VerifiedIcon from '../VerifiedIcon';

interface CardTitlePropsType {
  title: string;
  verified: boolean;
}

const CardTitle = ({ title, verified }: CardTitlePropsType) => {
  return (
    <h5 className="card-title">
      {title} {verified ? <VerifiedIcon /> : <></>}
    </h5>
  );
};

export default CardTitle;
