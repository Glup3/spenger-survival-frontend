import React from 'react';
import { Link } from 'react-router-dom';

import Gif from '../assets/check.gif';

const SuccessfulAddTipPage = () => {
  return (
    <div className="container text-center">
      <h1>Dein Tipp wurde erfolgreich hinzugefügt :&#41;</h1>
      <p className="mt-4">
        <Link to="/">Hier geht es zurück.</Link>
      </p>
      <img className="img-fluid" src={Gif} alt="Thumbs Up" />
    </div>
  );
};

export default SuccessfulAddTipPage;
