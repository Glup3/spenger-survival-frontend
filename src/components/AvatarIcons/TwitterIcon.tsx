import React from 'react';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TwitterIconPropstype {
  link: string;
}

const TwitterIcon = ({ link }: TwitterIconPropstype) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter} className="mr-2" />
    </a>
  );
};

export default TwitterIcon;
