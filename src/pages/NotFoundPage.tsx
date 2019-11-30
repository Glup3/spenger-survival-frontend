import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container text-center">
      <h1>404 Die Seite wurde leider nicht gefunden</h1>
      <p className="mt-4">
        <Link to="/">Hier geht es zurück.</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
