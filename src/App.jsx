import { Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Categoria from './pages/Categoria/Categoria'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Kids from './pages/Categoria/Subcategorias/Kids'
import Shoes from './pages/Categoria/Subcategorias/Shoes'
import Automotive from './pages/Categoria/Subcategorias/Automotive'
import Baby from './pages/Categoria/Subcategorias/Baby'
import Beauty from './pages/Categoria/Subcategorias/Beauty'
import Books from './pages/Categoria/Subcategorias/Books'
import Clothing from './pages/Categoria/Subcategorias/Clothing'
import Computers from './pages/Categoria/Subcategorias/Computers'
import Electronics from './pages/Categoria/Subcategorias/Electronics'
import Games from './pages/Categoria/Subcategorias/Games'
import Garden from './pages/Categoria/Subcategorias/Garden'
import Grocery from './pages/Categoria/Subcategorias/Grocery'
import Health from './pages/Categoria/Subcategorias/Health'
import Jewerly from './pages/Categoria/Subcategorias/Jewerly'
import Industrial from './pages/Categoria/Subcategorias/Industrial'
import HomeCat from './pages/Categoria/Subcategorias/HomeCat'
import Movies from './pages/Categoria/Subcategorias/Movies'
import Music from './pages/Categoria/Subcategorias/Music'
import Sports from './pages/Categoria/Subcategorias/Sports'
import Tools from './pages/Categoria/Subcategorias/Tools'
import Toys from './pages/Categoria/Subcategorias/Toys'
import Login from './pages/Login/Login.jsx'
import Signup from './pages/Signup/Signup'
import Error404 from './pages/404Error/Error404'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<ProductDetail />} />
        <Route path='/categoria' element={<Categoria />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/categoria/categoria/:kids' element={<Kids />} />
        <Route path='/categoria/categoria/:shoes' element={<Shoes />} />
        <Route path='/categoria/categoria/:automotive' element={<Automotive />} />
        <Route path='/categoria/categoria/:baby' element={<Baby />} />
        <Route path='/categoria/categoria/:beauty' element={<Beauty />} />
        <Route path='/categoria/categoria/:books' element={<Books />} />
        <Route path='/categoria/categoria/:clothing' element={<Clothing />} />
        <Route path='/categoria/categoria/:computers' element={<Computers />} />
        <Route path='/categoria/categoria/:electronics' element={<Electronics />} />
        <Route path='/categoria/categoria/:games' element={<Games />} />
        <Route path='/categoria/categoria/:garden' element={<Garden />} />
        <Route path='/categoria/categoria/:grocery' element={<Grocery />} />
        <Route path='/categoria/categoria/:health' element={<Health />} />
        <Route path='/categoria/categoria/:home' element={<HomeCat />} />
        <Route path='/categoria/categoria/:industrial' element={<Industrial />} />
        <Route path='/categoria/categoria/:jewerly' element={<Jewerly />} />
        <Route path='/categoria/categoria/:movies' element={<Movies />} />
        <Route path='/categoria/categoria/:music' element={<Music />} />
        <Route path='/categoria/categoria/:sports' element={<Sports />} />
        <Route path='/categoria/categoria/:tools' element={<Tools />} />
        <Route path='/categoria/categoria/:toys' element={<Toys />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
