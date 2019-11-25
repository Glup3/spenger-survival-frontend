import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SpengerSurvivalLogo from '../SpengerSurvivalLogo';
import NavbarLink from '../NavbarLink';

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
          <NavbarLink pathname={pathname} url="/about">
            FAQ
          </NavbarLink>
          <NavbarLink pathname={pathname} url="/tipp-abgeben">
            Tipp abgeben
          </NavbarLink>
          <NavbarLink pathname={pathname} url="/hall-of-fame">
            Hall of Fame
          </NavbarLink>
        </ul>
        <ul className="navbar-nav">
          <NavbarLink pathname={pathname} url="/datenschutz">
            Datenschutz
          </NavbarLink>
          <NavbarLink pathname={pathname} url="/impressum">
            Impressum
          </NavbarLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
