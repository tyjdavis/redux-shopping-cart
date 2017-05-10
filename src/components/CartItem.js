import React from 'react'

const CartItem = ({ shirts }) => (
  <ul>
    {shirts.map((shirt, index) => {
      return <ul>
        <li>{shirt.items}</li>
            </ul>
    }
  )}
  </ul>
)

export default CartItem
