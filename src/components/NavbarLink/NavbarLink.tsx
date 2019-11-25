import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

interface NavbarLinkPropsType {
  children: any;
  pathname: string;
  url: string;
  isBrand?: boolean;
}

const NavbarLink = ({ children, pathname, url, isBrand = false }: NavbarLinkPropsType) => {
  return (
    <li
      className={`nav-item ${pathname === url ? 'active' : ''} ${isBrand && 'navbar-brand'}`}
      onClick={() => {
        const navMain = $('.navbar-collapse');
        navMain.on('click', 'a:not([data-toggle])', null, () => {
          navMain.collapse('hide');
        });
      }}
    >
      <Link to={url} className="nav-link">
        {children}
      </Link>
    </li>
  );
};

export default NavbarLink;
