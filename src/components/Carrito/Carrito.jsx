import { useProductContext } from '../../context/ProductContext'

export const Carrito = () => {
  const value = useProductContext(useProductContext)
  const [menu, setMenu] = value.menu
  const [carrito, setCarrito] = value.carrito
  const [total] = value.total

  const tooglefalse = () => {
    setMenu(false)
  }

  const show1 = menu ? 'carritos show' : 'carritos'
  const show2 = menu ? 'carrito show' : 'carrito'

  const resta = id => {
    carrito.forEach(item => {
      if (item.id === id) {
        item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1
      }
      setCarrito([...carrito])
    })
  }

  const suma = id => {
    carrito.forEach(item => {
      if (item.id === id) {
        item.cantidad += 1
      }
      setCarrito([...carrito])
    })
  }

  const removeProducto = id => {
    if (window.confirm('Quieres eliminar el producto?')) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1
          carrito.splice(index, 1)
        }
      })
      setCarrito([...carrito])
    }
  }

  const validacionUrl = (url) => {
    if (typeof url !== 'string') {
      return false
    }
    // eslint-disable-next-line no-useless-escape
    return (url.match(/^http[^\?].(jpg|jpeg|gif|png|tiff|bmp)(\?(.))?$/gmi) !== null)
  }

  return (
    <div className={show1}>
      <div className={show2}>
        <div className='carrito_close' onClick={tooglefalse}>
          <box-icon name='x' />
        </div>
        <h2>Su carrito</h2>
        <div className='carrito_center'>
          {
            carrito.length === 0
              ? <h2 style={{ textAlign: 'center', fontSize: '3rem' }}>Carrito Vacio
              </h2>
              : <>
                {
                  carrito.map((producto) => (
                    <div key={producto._id}>
                      <div className='carrito_item' />
                      <img className='imagen' src={validacionUrl(producto.image) ? producto.image : validacionUrl(producto.images) ? producto.images : producto.images || 'https://cf.geekdo-images.com/camo/cba429883803dadea626df689cdbf3ddc0dc1bba/68747470733a2f2f692e696d6775722e636f6d2f456161485557462e6a7067'} alt='' />
                      <div>
                        <p> {`${producto.product_name} `}</p>
                        <p className='price'>{`Price: $ ${producto.price} `}</p>
                      </div>
                      <div>
                        <box-icon name='up-arrow' type='solid' onClick={() => suma(producto._id)} />
                        <p className='cantidad'>{producto.cantidad}</p>
                        <box-icon name='down-arrow' type='solid' onClick={() => resta(producto._id)} />
                      </div>
                      <div className='remove_item' onClick={() => removeProducto(producto._id)}>
                        <box-icon name='trash' />
                      </div>
                    </div>
                  ))
                }
              </>
          }
        </div>
      </div>
      <div className='carrito_footer'>
        <h3>Total: ${total}</h3>
        <button className='btn'>Payment</button>
      </div>
    </div>
  )
}
