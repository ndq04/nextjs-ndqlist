const url = 'https://jsonplaceholder.typicode.com/users/'
import styles from '../../styles/Home.module.css'
import router, {useRouter} from 'next/router'

export const getStaticPaths = async () => {
  const res = await fetch(url)
  const data = await res.json()
  const paths = data.map((item) => {
    return {
      params: {
        id: item.id + '',
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const {id} = context.params
  const res = await fetch(url + id)
  const data = await res.json()

  return {
    props: {
      user: data,
    },
  }
}

function Details({user}) {
  const router = useRouter()
  return (
    <div className='content details'>
      <h1>
        {user.id}. {user.name}
      </h1>
      <br />
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <br />
      <p>
        <strong>Website: </strong>
        {user.website}
      </p>
      <br />
      <p>
        <strong>City: </strong>
        {user.address.city}
      </p>
      <br />
      <a
        className={styles.btn}
        onClick={() => router.push('/ndq')}
      >
        Back
      </a>
    </div>
  )
}

export default Details
