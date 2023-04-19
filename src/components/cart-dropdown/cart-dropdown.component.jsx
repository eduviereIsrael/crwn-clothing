import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import React from 'react'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  }
  return (
    <CartDropdownContainer>
        <CartItems>
          {
            cartItems.length > 0? cartItems.map(item => <CartItem key={item.id} cartItem={item} />) : (
              <EmptyMessage>Your cart is empty</EmptyMessage>
            )
          }
            {/* {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)} */}
        </CartItems>
        <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown