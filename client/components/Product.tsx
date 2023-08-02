import React from 'react'

interface ProductProps {
  product: {
    id: number
    title: string
    description: string
    price: number
    imageURL: string
    sizeOptions: { id: number; label: string }[]
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
  return (
    <div className="product-container">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img src={product.imageURL} alt={product.title} />

      <div className="size-options">
        {product.sizeOptions.map((sizeOption) => (
          <button
            key={sizeOption.id}
            className={`size-option ${
              selectedSize === sizeOption.label ? 'selected' : ''
            }`}
            onClick={() => onSizeChange(sizeOption.label)}
          >
            {sizeOption.label}
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
