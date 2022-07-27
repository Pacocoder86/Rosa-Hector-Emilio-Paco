import { ProductoProvider } from '../../context/ProductContext'
import CartItem from './CartItem'
import ProductItem from './ProductItem'
import ShoppingCart from './ShoppingCart'

const Checkout = () => {
  return (
    <>
      <ProductoProvider>
        <CartItem />
        <ProductItem />
        <ShoppingCart />
      </ProductoProvider>
    </>
  )
}

export default Checkout
