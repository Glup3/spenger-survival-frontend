import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

import './VerifiedIcon.scss';

const VerifiedIcon = () => {
  useEffect(() => {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }, []);

  return (
    <span data-toggle="tooltip" data-placement="top" title="Verifiziert">
      <FontAwesomeIcon className="check" size="sm" icon={faCheckCircle} />
    </span>
  );
};

export default VerifiedIcon;
