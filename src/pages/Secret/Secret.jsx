import { useContext } from 'react'
import Header from '../../components/Header/Header'
import { AuthContext } from '../../context/AuthContext'

const Secret = () => {
  const { user } = useContext(AuthContext)
  return (
    <><Header />
      <div>
        <h1>Secret</h1>
        {user.role === 'ADMIN'
          ? <h2>Hola Admin</h2>
          : <h2>Hola Customer</h2>}

        {user.role === 'CUSTOMER' && <h4>Bienvenido seas Cliente</h4>}

        {user.role === 'ADMIN' && <h4>Bienvenido seas  Administrador</h4>}
      </div>
    </>
  )
}

export default Secret
