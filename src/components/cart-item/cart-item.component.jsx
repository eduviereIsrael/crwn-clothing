import { CartItemContainer, CartImg, ItemDetails, CartItemName } from "./cart-item.styles.jsx";

import React from 'react'

const CartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
  return (
    <CartItemContainer>
      <CartImg src={imageUrl} alt={name} />
        <ItemDetails>
          <CartItemName>{name}</CartItemName>
          <span className="price">{quantity} x ${price}</span>
        </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem