import React from 'react';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SoundcloudIconPropsType {
  link: string;
}

const SoundcloudIcon = ({ link }: SoundcloudIconPropsType) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faSoundcloud} className="mr-2" />
    </a>
  );
};

export default SoundcloudIcon;
