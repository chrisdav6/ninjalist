import React from 'react';
import ninjaStyles from '../../styles/Ninja.module.scss';

export const getStaticProps = async context => {
  const id = context.params.id;
  const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      ninja: data
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

const Ninja = ({ ninja }) => {
  return (
    <div className={ninjaStyles.ninja}>
      <h1>{ninja.name}</h1>
      <p>Username: {ninja.username}</p>
      <p>Website: {ninja.website}</p>
      <p>Company: {ninja.company.name}</p>
    </div>
  );
};

export default Ninja;
