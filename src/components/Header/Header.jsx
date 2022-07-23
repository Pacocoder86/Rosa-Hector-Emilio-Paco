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
          <h2>FREE SHIPPING - DELIVERYS BETWEEN 1 & 3 DAYS.</h2>
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
                  {isAuth
                    ? (
                      <>
                        <Link to='/home'>
                          <li className='nav-items'>Home</li>
                        </Link>
                        <Link to='/secret'>
                          <li className='nav-items'>Secret</li>
                        </Link>
                        <Link to='/logout'>
                          <li className='nav-items'>Logout</li>
                        </Link>
                        <Link to='/categoria'>
                          <li className='nav-items'>Categories</li>
                        </Link>
                      </>
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
