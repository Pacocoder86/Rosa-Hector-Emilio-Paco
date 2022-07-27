import React from 'react'
import Card from '../../assets/img/peero.jpg'

export const Carrito = () => {
  return (
    <div className='carritos'>
      <div className='carrito'>

        <div className='carrito_close'>
          <box-icon name='x' />
        </div>
        <h2>Su carrito</h2>
        <div className='carrito_center'>

          <div className='carrito_item'>
            <img src={Card} alt='' />
            <div>
              <h3>title</h3>
              <p className='price'>$345</p>
            </div>
            <box-icon className='up-arrow' type='solid' />
            <p className='cantidad'>1</p>
            <box-icon name='down-arrow' type='solid' />
          </div>
          <div className='remove_item'>
            <box-icon name='trash' type='solid' />
          </div>
        </div>
        <div className='carrito_footer'>
          <h3> Total: $2334</h3>
          <button className='btn'>Payment</button>
        </div>
      </div>
    </div>
  )
}
