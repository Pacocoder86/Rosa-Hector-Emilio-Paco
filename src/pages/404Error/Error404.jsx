import Error from '../../assets/img/Error404.jpeg'
import { useLocation, Link } from 'react-router-dom'
import Header from '../../components/Header/Header'

const Error404 = () => {
  const location = useLocation()
  return (
    <><Header /><div>
      <img src={Error} alt='' />
      <p>No encontre lo que buscabas</p>
      <p><Link to='/'>Regresa al Home</Link></p>
    </div>
    </>

  )
}

export default Error404
