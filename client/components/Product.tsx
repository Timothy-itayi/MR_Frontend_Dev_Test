import React from 'react'

interface ProductProps {
  product: {
    name: string
    description: string
    sizes: string[]
  }
  selectedSize: string
  onSizeChange: (size: string) => void
  onAddToCart: () => void
}

const Product: React.FC<ProductProps> = ({
  product,
  selectedSize,
  onSizeChange,
  onAddToCart,
}) => {
  if (!product.sizes) {
    // Product data is not available yet, show a loading message or spinner
    return <div>Loading...</div>
  }

  return (
    <div className="product-container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div className="size-options">
        {product.sizes.map((size) => (
          <button
            key={size}
            className={`size-option ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
      <button className="add-to-cart-button" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default Product
