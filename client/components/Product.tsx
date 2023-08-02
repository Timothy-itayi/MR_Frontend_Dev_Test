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
  const handleSizeChange = (size: string) => {
    console.log(`Selected size changed to: ${size}`)
    onSizeChange(size)
  }

  const handleAddToCart = () => {
    console.log('Adding to cart...')
    onAddToCart()
  }

  return (
    <div className="product-container">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img
        className="product-image"
        src={product.imageURL}
        alt={product.title}
      />

      <div className="size-options">
        {product.sizeOptions.map((sizeOption) => (
          <button
            key={sizeOption.id}
            className={`size-option ${
              selectedSize === sizeOption.label ? 'selected' : ''
            }`}
            onClick={() => handleSizeChange(sizeOption.label)}
          >
            {sizeOption.label}
          </button>
        ))}
      </div>

      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  )
}

export default Product
