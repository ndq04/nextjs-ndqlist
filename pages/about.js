import styles from '../styles/Home.module.css'
import Head from 'next/head'

function About() {
  return (
    <>
      <Head>
        <title>NDQ List | About</title>
        <meta
          name='keywords'
          content='web, react, reactjs, nextjs, frontend'
        />
      </Head>
      <div className='content'>
        <h1 className={styles.title}>About Page</h1>
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
      </div>
    </>
  )
}

export default About
