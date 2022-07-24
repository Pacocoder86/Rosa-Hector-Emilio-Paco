import { Link } from 'react-router-dom'
import { useProductContext } from '../../context/ProductContext'
import FadeLoader from 'react-spinners/FadeLoader'
import './productlist.css'
import Paginacion from '../Paginacion/Paginacion'
import catamaran from '../../assets/img/catamaran.jpg'

const ProductList = () => {
  const context = useProductContext()
  const validacionUrl = (url) => {
    if (typeof url !== 'string') {
      return false
    }
    // eslint-disable-next-line no-useless-escape
    return (url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null)
  }

  return (
    <>
      <img className='d-block w-100' src={catamaran} alt='/' />
      <div className='main-container'>
        {context.loading
          ? <FadeLoader color='#000000' loading={context.loading} size={100} />
          : context.currentPost.filter(producto => {
            if (context.buscador === '') {
              return producto
            } else if (producto.product_name.toLowerCase().includes(context.buscador)) {
              return producto
            }
            return null
          }).map((producto) => (
            <div className='app-header' key={producto._id}>
              <div className='child'>
                <div className='card'>
                  <img className='imagen' src={validacionUrl(producto.image) ? producto.image : validacionUrl(producto.images) ? producto.images : producto.images || 'https://cf.geekdo-images.com/camo/cba429883803dadea626df689cdbf3ddc0dc1bba/68747470733a2f2f692e696d6775722e636f6d2f456161485557462e6a7067'} alt='' />
                  <p> {`${producto.product_name} `}</p>
                  <p>{`Brand: ${producto.brand} `}</p>
                  <p>{`Price: $ ${producto.price} `}</p>
                  <Link
                    className='btn btn-dark'
                    to={{
                      pathname: `/${producto._id}`
                    }}
                  >View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Paginacion
        productosPerPage={context.productosPerPage}
        totalProductos={context.producto.length}
        paginate={context.paginate}
      />
    </>
  )
}

export default ProductList
