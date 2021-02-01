import React from 'react';
import Link from 'next/link';
import notFoundStyles from '../styles/NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={notFoundStyles.notFound}>
      <h1>Ooops...</h1>
      <h2>That page cannot be found!</h2>
      <p>
        Go back to the{' '}
        <Link href='/'>
          <a>homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
