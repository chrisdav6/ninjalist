import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import notFoundStyles from '../styles/NotFound.module.scss';

const NotFound = () => {
  //Redirect user to homepage after 5 seconds
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div className={notFoundStyles.notFound}>
      <Head>
        <title>Ninja List | 404 Not Found!</title>
        <meta name='keywords' content='ninjas' />
      </Head>
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
