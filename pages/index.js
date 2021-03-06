import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>NDQ List | Home</title>
        <meta
          name='keywords'
          content='web, react, reactjs, nextjs, frontend'
        />
      </Head>
      <div className='content'>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          We don’t make assumptions about the rest of your
          technology stack, so you can develop new features
          in React without rewriting existing code. React
          can also render on the server using Node and power
          mobile apps using React Native.
        </p>
        <p className={styles.text}>
          We don’t make assumptions about the rest of your
          technology stack, so you can develop new features
          in React without rewriting existing code. React
          can also render on the server using Node and power
          mobile apps using React Native.
        </p>
        <Link href='/ndq'>
          <a className={styles.btn}> See NDQ Listing</a>
        </Link>
      </div>
    </>
  )
}
