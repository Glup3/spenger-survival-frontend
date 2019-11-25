import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faTransgender } from '@fortawesome/free-solid-svg-icons';

import './GenderIcon.scss';

interface GenderIconPropsType {
  gender?: string;
}

const GenderIcon = ({ gender }: GenderIconPropsType) => {
  if (gender === 'm') {
    return <FontAwesomeIcon icon={faMars} />;
  }

  if (gender === 'w') {
    return <FontAwesomeIcon icon={faVenus} />;
  }

  if (gender === '+') {
    return <FontAwesomeIcon icon={faTransgender} />;
  }

  return <></>;
};

export default GenderIcon;
