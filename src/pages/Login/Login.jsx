import './login.css'
import logo from '..//../assets/img/logo.png'
import Header from '../../components/Header/Header'

const Login = () => {
  return (
    <><Header /><main className='form-signin w-100 m-auto form-text'>
      <div className='main-container'>
        <form>
          <img className='mb-4 logo-login' src={logo} alt='' width='72' height='57' />
          <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='name@example.com'
              value=''
              onChange={() => { }}
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
              value=''
              onChange={() => { }}
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
