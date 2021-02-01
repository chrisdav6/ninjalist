import React from 'react';
import Head from 'next/head';
import ninjaStyles from '../../styles/Ninjas.module.scss';

const Ninjas = () => {
  return (
    <div>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <h1>All the Ninjas</h1>
    </div>
  );
};

export default Ninjas;
