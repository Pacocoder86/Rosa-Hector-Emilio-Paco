import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

const ProductContext = createContext()

function ProductoProvider(props) {
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState({})
  const [buscador, setBuscador] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  // eslint-disable-next-line no-unused-vars
  const [productosPerPage, setProductosPerPage] = useState(40)

  const [menu, setMenu] = useState(false)
  const [carrito, setCarrito] = useState([])

  const getProductos = async () => {
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
    console.log('api', res.data)
    setProducto(res.data)
  }
  useEffect(() => {
    setTimeout(() => {
      getProductos()
      setLoading(false)
    }, [2000])
  }, [])

  const addCarrito = (id) => {
    const check = carrito.every(item => {
      return item.id !== id
    })
    if (check) {
      const data = producto.filter(producto => {
        return producto.id === id
      })
      setCarrito([...carrito, ...data])
    } else {
      console.log('El producto se ha agregado al carrito')
    }
  }

  const indexOfLastPage = currentPage * productosPerPage
  const indexOfFirstPage = indexOfLastPage - productosPerPage
  const currentPost = producto.slice(indexOfFirstPage, indexOfLastPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const value = {
    producto,
    selectedProduct,
    setSelectedProduct,
    loading,
    buscador,
    setBuscador,
    currentPost,
    productosPerPage,
    paginate,
    menu: [menu, setMenu],
    addCarrito: addCarrito,
    carrito: [carrito, setCarrito]
  }


  return (
    <ProductContext.Provider value={value} {...props} />
  )
}
const useProductContext = () => {
  const context = useContext(ProductContext)
  return context
}
export {
  ProductoProvider,
  useProductContext
}
