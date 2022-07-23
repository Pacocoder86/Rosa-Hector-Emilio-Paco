/*
High Order Component (HOC)
Es un patrón de diseño pensado en la reutilización de componentes.
Consiste en crear una función que recibe como parametro un componente
y retorna un nuevo componente modificado.
Permite inyectar lógica, al componente original.
*/

// Lo vamos a utilizar para proteger la ruta

// children es el compoenente que le paso como parámetro. Protected, papa y Secret el hijo
// Prop = isLoggedIn
// replace, en el historial de navegación nunca tocas el recurso protegido, te envia a login y no queda rastro.
// Esopcional el uso de replace

import { Navigate } from 'react-router-dom'

const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to='/login' replace />
  }
  return children
}

export default Protected
