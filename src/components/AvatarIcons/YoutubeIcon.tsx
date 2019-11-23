import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

interface YoutubeIconPropsType {
  link: string;
}

const YoutubeIcon = ({ link }: YoutubeIconPropsType) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faYoutube} className="mr-2" />
    </a>
  );
};

export default YoutubeIcon;
