import Error from '../../assets/img/Error404.jpeg'
import { useLocation, Link } from 'react-router-dom'
import Header from '../../components/Header/Header'


const Error404 = () => {
  const location = useLocation()
  return (
    <><Header />
      <div className='main-container'>
        <img className='error-img' src={Error} alt='error' />
      </div>
      <div className='error-text'>
        <p>Page Not Found</p>
        <Link className='btn btn-dark' to='/'>Go Back</Link>
      </div>
    </>

  )
}

export default Error404
