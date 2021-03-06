import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <Link href='/'>
          <a>
            <img
              src='/favicon.ico'
              width={60}
              height={60}
            />
          </a>
        </Link>
      </div>
      <ul className='nav-list'>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/ndq'>
            <a>NDQ List</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
