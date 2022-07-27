const CartItem = ({ data, delfromCart }) => {
  const { id, name, price, quantity } = data
  return (
    <>
      <div>
        <h4>{name}</h4>
        <h5>{price}.00 x{quantity} =${price * quantity}.00</h5>
        <button onClick={() => delfromCart(id)}>Eliminar Uno</button>
        <button onClick={() => delfromCart(id, true)}>Eliminar Todos</button>
      </div>
    </>
  )
}

export default CartItem
