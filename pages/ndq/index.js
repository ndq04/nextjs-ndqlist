import Head from 'next/head'
import styles from '../../styles/Ndq.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  )
  const data = await response.json()

  return {
    props: {users: data},
  }
}

function Ndq({users}) {
  return (
    <>
      <Head>
        <title>NDQ List | List</title>
        <meta
          name='keywords'
          content='web, react, reactjs, nextjs, frontend'
        />
      </Head>
      <div className='content details'>
        <h1>Ndq</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/ndq/${user.id}`}>
                <a className={styles.single}>
                  <h3>
                    {user.id}. {user.name}
                  </h3>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Ndq
