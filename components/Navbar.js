import React from 'react';
import Link from 'next/link';
import navStyles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={navStyles.mainNav}>
      <div className={navStyles.logo}>
        <h1>Ninja List</h1>
      </div>

      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/ninjas'>Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;
