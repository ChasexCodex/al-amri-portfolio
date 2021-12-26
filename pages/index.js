import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Al-Amri family's website"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          Elyas Al-Amri{'\''}s portfolio
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            Powered by{' '}
            <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
          </a>
        </footer>
      </div>
    </>
  );
}
