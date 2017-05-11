import React from 'react'

const CartItem = ({ shirts }) => (
  <ul>
    {shirts.map((shirt, index) => {
      return <ul>
        <li>{shirt.name}</li>
            </ul>
    }
  )}
  </ul>
)

export default CartItem
