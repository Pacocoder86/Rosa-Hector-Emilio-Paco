import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm.js'
import axios from 'axios'
import './login.css'
import logo from '..//../assets/img/logo.png'
import Header from '../../components/Header/Header'

const Login = () => {
  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext)
  const sendData = (data) => {
    axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', data)
      .then((response) => {
        if (response.status === 200) {
          // Cuando el usuario inica sesion
          console.log(response.data)
          // Guardar el token el local storage del navegador
          // Este token permanece aún si el navegador se vuelve a abrir
          // window.localStorage.setItem('token', response.data.token)
          loginUser(response.data.token) // ejecuta la función y le manda el tocken
          navigate('/')
        }
      }).catch((error) => {
        console.log(error.message)
      })
  }
  // Comenzar a usar useForm y declarar los valores iniciales para evitar problemas en el renderizado de componentes controlados
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <><Header /><main className='form-signin w-100 m-auto form-text'>
      <div className='main-container'>
        <form onSubmit={handleSubmit}>
          <img className='mb-4 logo-login' src={logo} alt='' width='72' height='57' />
          <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='name@example.com'
              value={input.email}
              onChange={handleInputChange}
            />
            <label htmlFor='email'>Email address</label>
          </div>

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              placeholder='Password'
              value={input.password}
              onChange={handleInputChange}
            />
            <label htmlFor='password'>Password</label>
          </div>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
          <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
        </form>
      </div>
    </main>
    </>
  )
}

export default Login
