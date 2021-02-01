import React from 'react';
import Link from 'next/link';
import navStyles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={navStyles.mainNav}>
      <div className={navStyles.logo}>
        <h1>
          <Link href='/'>
            <a>Ninja List</a>
          </Link>
        </h1>
      </div>

      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
