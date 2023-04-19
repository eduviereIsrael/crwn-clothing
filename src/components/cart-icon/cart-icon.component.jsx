import { useContext } from "react";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles.jsx";
import { CartContext } from "../../contexts/cart.context";


const CartIcon = () => {
    const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon