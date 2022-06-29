import { Link } from 'react-router-dom'
import './navbar.css'


export default function NavBar() {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-title'>Unsplash</Link>
    </nav>
  )
}
