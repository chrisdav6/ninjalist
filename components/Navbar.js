import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import navStyles from '../styles/Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={navStyles.mainNav}>
      <div className={navStyles.logo}>
        <h1>
          <Link href='/'>
            <a>
              <Image src='/logo.png' alt='Logo' width={128} height={77} />
            </a>
          </Link>
        </h1>
      </div>

      <Link href='/'>
        <a className={navStyles.link}>Home</a>
      </Link>
      <Link href='/about'>
        <a className={navStyles.link}>About</a>
      </Link>
      <Link href='/ninjas'>
        <a className={navStyles.link}>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
