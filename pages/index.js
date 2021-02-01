import Head from 'next/head';
import Link from 'next/link';
import homeStyles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div>
      <h1 className={homeStyles.title}>Home</h1>
      <p className={homeStyles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus hic
        magni quisquam, asperiores doloremque in iure laboriosam nobis fuga quod
        rerum dolorum. Molestiae ipsum quia nisi iusto, aliquid qui sint, ullam
        adipisci, exercitationem velit et est accusantium facere expedita
        repudiandae minima tempora officiis esse? Aut aliquid accusamus quasi
        animi eos exercitationem sint quas ipsa aliquam placeat, ratione earum
        excepturi possimus a! Quod impedit eveniet autem animi voluptatum,
        aspernatur eos atque illo! Necessitatibus quidem perferendis, eveniet
        error suscipit autem sapiente officiis aut? Iste, officiis. Esse velit
        quam in, rem, molestiae incidunt sunt tenetur enim voluptatem vero culpa
        ab voluptas? Magnam, vero?
      </p>
      <Link href='/ninjas'>
        <button className={homeStyles.btn}>See Ninja Listing</button>
      </Link>
    </div>
  );
}
