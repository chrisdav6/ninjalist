import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ninjasStyles from '../../styles/Ninjas.module.scss';

export const getStaticProps = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      ninjas: data
    }
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <div className={ninjasStyles.ninjas}>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <h1>All the Ninjas</h1>

      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <Link href={`/ninjas/${ninja.id}`}>
            <a className={ninjasStyles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
