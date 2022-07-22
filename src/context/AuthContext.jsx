import { createContext, useState, useEffect } from 'react'
import getPayload from '../utils/getPayload.js'

// 1. Crear el contexto
export const AuthContext = createContext()

// 2. Crear el provedor del contexto
const AuthContextProvider = (props) => {
  // Definir los estados globales

  // El ususario inicio sesión correctamente?
  const [isAuth, setIsAuth] = useState(false) // cuando se cargue la app, el isAuth es falso, cudo ahce login es true
  // información del Payload del JWT decifrado
  const [user, setUser] = useState(null) // guardo la data decifrada para que pueda ser accesada

  // Lógica que se ejecuta cuando se inica sesión
  // Le paso como parámetro el token cuadno se reciba la petición
  const loginUser = (token) => {
    window.localStorage.setItem('token', token)
    // mandamos llamar la función getPayload  que recibe un token decodificado y guardalo en decoded
    const decoded = getPayload(token)
    // el estdo user guarda el user descifrado setUser , a ese estado seteado le pedimos la info decodificada
    setUser(decoded)
    // cuando me logueo sethIsAuth cambia de false a true
    setIsAuth(true)
  }

  // Lógica que se  ejecuta cuando cierro la sesión
  const logoutUser = () => {
    window.localStorage.removeItem('token')
    setUser({})
    setIsAuth(false)
  }

  // Verificar en la carga de mi app si ya existe un token, y si es así lo cargo.
  // Cuand vuelves a entrar - verifica si ya tienes un tokecn guardado.
  // Si no existe el tocken no hace  nada.
  useEffect(() => {
    const item = window.localStorage.getItem('token')
    if (item) {
      const decoded = getPayload(item)
      setUser(decoded)
      setIsAuth(true)
    }
  }, [])

  // isAuth - sirve para hacer renderizao concidicional para ver si estoy autenticado o no
  // user - al usuario para ller su id y tipode ususario
  // loginUser - uso de funciones
  // logoutUser
  return (
    <AuthContext.Provider value={{
      isAuth, user, loginUser, logoutUser
    }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
