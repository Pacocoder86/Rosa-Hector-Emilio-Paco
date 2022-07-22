import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { useProductContext } from '../../context/ProductContext'
import './header.css'

const Header = () => {
  const { isAuth } = useContext(AuthContext)

  const context = useProductContext()
  const handleSearch = (e) => {
    context.setBuscador(e.target.value)
    console.log(context.buscador)
  }
  return (
    <>

      <div className='header-container'>
        <div className='container'>
          <h2>ENVÍO GRATIS en toda la tienda - Entregas de 1 a 3 días hábiles.</h2>
        </div>
        <div className='navbar is-primary'>
          <div className='navbar-brand'>
            <img className='logo-header' img src={logo} alt='logo' />
            <div className='input-box'>
              <div className='main-input'>
                <div className='main-input-container'>
                  <input
                    className='input-header' type='search' placeholder='Search...'
                    onChange={handleSearch}
                  />
                </div>
              </div>
            </div>
            <header>
              <nav>
                <ul className='list-links'>
                  <li className='nav-items'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='nav-items'>
                    <Link to='/categoria'>Categorias
                    </Link>
                  </li>
                  {isAuth
                    ? (
                      <Link to='/logout'>
                        <li className='nav-items'>Logout</li>
                      </Link>
                    )
                    : (
                      <>
                        <Link to='/login'>
                          <li className='nav-items'>Login</li>
                        </Link>
                        <Link to='/signup'>
                          <li className='nav-items'>Sign-up</li>
                        </Link>
                      </>
                    )}
                </ul>
              </nav>
            </header>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
