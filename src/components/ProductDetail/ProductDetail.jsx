import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import FadeLoader from 'react-spinners/FadeLoader'
import axios from 'axios'
import './productdetail.css'
import Header from '../Header/Header'

const ProductDetail = () => {
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)

  const getProductos = async () => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
    const filterProducto = res.data.filter((item) => item._id === id)[0]
    // filtrar por el id, cuando el id sea igual al id de link redenriza en la pozizion cero
    console.log('filter', filterProducto)
    setProducto(filterProducto)
  }

  useEffect(() => {
    setTimeout(() => {
      getProductos()
      setLoading(false)
    }, [2000])
  }, [])

  const validacionUrl = (url) => {
    if (typeof url !== 'string') {
      return false
    }
    // eslint-disable-next-line no-useless-escape
    return (url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null)
  }
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className='details-container'>
        {loading
          ? <FadeLoader color='#000000' loading={loading} size={100} />
          : <div className='product-detail-container'>
            <div className='product-image-detail'>
              <img className='image-detail' src={validacionUrl(producto.image) ? producto.image : validacionUrl(producto.images) ? producto.images : producto.images || 'https://cf.geekdo-images.com/camo/cba429883803dadea626df689cdbf3ddc0dc1bba/68747470733a2f2f692e696d6775722e636f6d2f456161485557462e6a7067'} alt='imagen producto' />
            </div>
            <div className='product-text-detail'>
              <h1> {`${producto.product_name} `}</h1>
              <h3>{`SKU: ${producto.sku} `}</h3>
              <h3>{`Brand: ${producto.brand} `}</h3>
              <h3>{`Category: ${producto.category} `}</h3>
              <h4 className='product-description'>{`Description: ${producto.description} `}</h4>
              <h2>{`Price: $ ${producto.price} `}</h2>
              <div className='container-botones'>
                <button className='btn btn-dark  boton-pdp'>Buy now</button>
                <button
                  className='btn btn-dark  boton-pdp'
                  onClick={() => {
                    navigate(-1)
                  }}
                >
                  Back
                </button>
              </div>
            </div>
          </div>}
      </div>
    </>
  )
}

export default ProductDetail
