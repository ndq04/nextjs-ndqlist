import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'

function NotFound() {
  const time = 5
  const [countDown, setCountDown] = useState(time)

  const router = useRouter()
  console.log(countDown)

  useEffect(() => {
    let idTimer
    if (countDown > 0) {
      idTimer = setInterval(() => {
        setCountDown((prevCountDown) => prevCountDown - 1)
      }, 1000)
    }
    return () => {
      clearInterval(idTimer)
      clearTimeout()
    }
  }, [countDown])
  return (
    <div className='content not-found'>
      <h1 className={styles.title}>Ooooops...</h1>
      <h2 className={styles.title}>
        That page cannot be found.
      </h2>
      {countDown == 0 && (
        <>
          <p className={styles.text}>
            Go back to the{' '}
            <Link href='/'>
              <a>Homepage</a>
            </Link>
          </p>
          <p className={styles.text}>
            <a onClick={() => router.back()}>Back</a>
          </p>
        </>
      )}

      {countDown > 0 && (
        <p style={{fontSize: '16px'}}>
          Redirect to homepage after{' '}
          <span
            style={{fontSize: '20px', fontWeight: '600'}}
          >
            {countDown}
          </span>
          ... seconds
        </p>
      )}
    </div>
  )
}

export default NotFound
