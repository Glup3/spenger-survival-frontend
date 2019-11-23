import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface GithubIconPropsType {
  link: string;
}

const GithubIcon = ({ link }: GithubIconPropsType) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} className="mr-2" />
    </a>
  );
};

export default GithubIcon;
