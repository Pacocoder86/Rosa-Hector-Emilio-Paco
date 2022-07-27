const ProductItem = (data, addToCart) => {
  const { id, name, price } = data
  return (
    <>
      <h4>{name}</h4>
      <h5>{price}.00</h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </>
  )
}

export default ProductItem
