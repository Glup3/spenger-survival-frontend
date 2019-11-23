import React, { useEffect } from 'react';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

interface DiscordIconPropsType {
  name: string;
}

const DiscordIcon = ({ name }: DiscordIconPropsType) => {
  useEffect(() => {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }, []);

  return (
    <span data-toggle="tooltip" data-placement="top" title={name}>
      <FontAwesomeIcon icon={faDiscord} className="mr-2" />
    </span>
  );
};

export default DiscordIcon;
