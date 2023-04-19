
import { Image, Button, ProductCardContainer, Footer, Name, Price } from "./product-card.styles.jsx";
import { BUTTON_TYPE_CLASSSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";


const ProductCard = ({ product }) => {
  const {name, price, imageUrl} = product;  
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);


  return (
    <ProductCardContainer>
        <Image src={imageUrl} alt={name} />
        <Footer>
            <Name>{name}</Name>
            <Price>${price}</Price>
        </Footer>
        <Button buttonType={BUTTON_TYPE_CLASSSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard
