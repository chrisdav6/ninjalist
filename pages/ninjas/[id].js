import React from 'react';
import { useRouter } from 'next/router';
import ninjaStyles from '../../styles/Ninja.module.scss';

// export const getStaticProps = async () => {
//   const router = useRouter();
//   const { id } = router.query;

//   const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
//   const data = await res.json();

//   return {
//     props: {
//       ninja: data
//     }
//   };
// };

const Ninja = () => {
  return (
    <div className={ninjaStyles.ninja}>
      <h1>Ninja Page</h1>
    </div>
  );
};

export default Ninja;
