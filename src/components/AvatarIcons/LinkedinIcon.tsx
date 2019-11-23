import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface LinkedinIconPropsType {
  link: string;
}

const LinkedinIcon = ({ link }: LinkedinIconPropsType) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
    </a>
  );
};

export default LinkedinIcon;
