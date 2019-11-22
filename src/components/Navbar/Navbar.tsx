import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark mb-4">
      <Link to="/" className="navbar-brand">
        Spenger Survival
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/motivation" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hall-of-fame" className="nav-link">
              Hall of Fame
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tipp-adden" className="nav-link">
              Tipp abgeben
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/datenschutz" className="nav-link">
              Datenschutzerklärung
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/impressum" className="nav-link">
              Impressum
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
