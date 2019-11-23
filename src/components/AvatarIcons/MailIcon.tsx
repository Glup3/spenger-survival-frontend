import React, { useEffect } from 'react';
import $ from 'jquery';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MailIconPropsType {
  email: string;
}

const MailIcon = ({ email }: MailIconPropsType) => {
  useEffect(() => {
    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }, []);

  return (
    <span data-toggle="tooltip" data-placement="top" title={email}>
      <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
    </span>
  );
};

export default MailIcon;
