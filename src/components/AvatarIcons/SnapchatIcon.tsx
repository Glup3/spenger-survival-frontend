import React, { useEffect } from 'react';
import $ from 'jquery';
import { faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SnapchatIconPropsType {
  name: string;
}

const SnapchatIcon = ({ name }: SnapchatIconPropsType) => {
  useEffect(() => {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }, []);

  return (
    <span data-toggle="tooltip" data-placement="top" title={name}>
      <FontAwesomeIcon icon={faSnapchatGhost} className="mr-2" />
    </span>
  );
};

export default SnapchatIcon;
