import { CategoryPreviewContainer, Title, Preview } from "./category-preview.styles.jsx"
import ProductCard from "../product-card/product-card.component"

import React from 'react'
import { Link } from "react-router-dom"

const CategoryPreview = ({title, products}) => {
  return (
    <CategoryPreviewContainer>
        <h2>
            <Link to={`${title}`}>
              <Title>{title.toUpperCase()}</Title>
            </Link>
        </h2>
        <Preview>
            {
            products.filter((_, idx) => idx < 4)
            .map((product) => (
                <ProductCard product={product} />
            ))
            }
        </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview