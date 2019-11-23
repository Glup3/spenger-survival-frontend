import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

interface InstagramIconPropsType {
  link: string;
}

const InstagramIcon = ({ link }: InstagramIconPropsType) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} className="mr-2" />
    </a>
  );
};

export default InstagramIcon;
