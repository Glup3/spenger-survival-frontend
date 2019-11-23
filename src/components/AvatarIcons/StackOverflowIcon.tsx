import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

interface StackOverflowIconPropsType {
  link: string;
}

const StackOverflowIcon = ({ link }: StackOverflowIconPropsType) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faStackOverflow} className="mr-2" />
    </a>
  );
};

export default StackOverflowIcon;
