import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SpengerSurvivalLogo from '../SpengerSurvivalLogo';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark mb-4">
      <Link to="/" className="navbar-brand active">
        <SpengerSurvivalLogo />
        <span className="ml-2">Spenger Survival</span>
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
          <li className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className={`nav-item ${pathname === '/tipp-abgeben' ? 'active' : ''}`}>
            <Link to="/tipp-abgeben" className="nav-link">
              Tipp abgeben
            </Link>
          </li>
          <li className={`nav-item ${pathname === '/hall-of-fame' ? 'active' : ''}`}>
            <Link to="/hall-of-fame" className="nav-link">
              Hall of Fame
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className={`nav-item ${pathname === '/datenschutz' ? 'active' : ''}`}>
            <Link to="/datenschutz" className="nav-link">
              Datenschutz
            </Link>
          </li>
          <li className={`nav-item ${pathname === '/impressum' ? 'active' : ''}`}>
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
