import React from 'react';
import { Link } from 'react-router-dom';

import Gif from '../assets/thumbs-up.gif';

const SuccessfulAddTipPage = () => {
  return (
    <div className="container">
      <h1>Dein Tipp wurde erfolgreich hinzugefügt :&#41;</h1>
      <p>
        <Link to="/">Hier geht es zurück.</Link>
      </p>
      <img className="img-fluid" src={Gif} alt="Thumbs Up" />
    </div>
  );
};

export default SuccessfulAddTipPage;
