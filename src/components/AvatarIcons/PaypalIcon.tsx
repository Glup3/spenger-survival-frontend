import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';

interface PaypalIconPropsType {
  link: string;
}
const PaypalIcon = ({ link }: PaypalIconPropsType) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faPaypal} className="mr-2" />
    </a>
  );
};

export default PaypalIcon;
