import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface FacebookIconPropsType {
  link: string;
}

const FacebookIcon = ({ link }: FacebookIconPropsType) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook} className="mr-2" />
    </a>
  );
};

export default FacebookIcon;
