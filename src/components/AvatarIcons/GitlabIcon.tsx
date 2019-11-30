import React from 'react';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface GitlabIconPropsType {
  link: string;
}

const GitlabIcon = ({ link }: GitlabIconPropsType) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGitlab} className="mr-2" />
    </a>
  );
};

export default GitlabIcon;
