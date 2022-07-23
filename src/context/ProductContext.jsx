import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'

const ProductContext = createContext()

function ProductoProvider(props) {
  const [producto, setProducto] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState({})
  const [buscador, setBuscador] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [productosPerPage, setProductosPerPage] = useState(20)


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

  const indexOfLastPage = currentPage * productosPerPage
  const indexOfFirstPage = indexOfLastPage - productosPerPage
  const currentPost = producto.slice(indexOfFirstPage, indexOfLastPage)

  const value = {
    producto,
    selectedProduct,
    setSelectedProduct,
    loading,
    buscador,
    setBuscador,
    currentPost,
    productosPerPage
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
