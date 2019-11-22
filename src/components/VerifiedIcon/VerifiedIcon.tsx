import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import './VerifiedIcon.scss';

const VerifiedIcon = () => {
  return (
    <span data-toggle="tooltip" data-placement="top" title="Verifiziert">
      <FontAwesomeIcon className="check" size="sm" icon={faCheckCircle} />
    </span>
  );
};

export default VerifiedIcon;
