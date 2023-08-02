import React, { useState } from 'react'

import Product from './Product'
import MiniCart from './MiniCart'
import FetchProduct from './FetchProduct'

interface MiniCartItem {
  size: string
  quantity: number
}

interface ProductItem {
  id: number
  title: string
  description: string
  price: number
  imageURL: string
  sizeOptions: { id: number; label: string }[]
}

const App: React.FC = () => {
  const [product, setProduct] = useState<ProductItem>({
    id: 0,
    title: '',
    description: '',
    price: 0,
    imageURL: '',
    sizeOptions: [],
  })
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [miniCartItems, setMiniCartItems] = useState<MiniCartItem[]>([])

  const handleFetchSuccess = (data: ProductItem) => {
    setProduct(data)
  }

  const handleFetchError = (error: Error) => {
    console.error('Error fetching product data:', error)
  }

  const handleSizeChange = (size: string) => {
    setSelectedSize(size)
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      const existingItem = miniCartItems.find(
        (item) => item.size === selectedSize
      )
      if (existingItem) {
        existingItem.quantity++
        setMiniCartItems([...miniCartItems])
      } else {
        const item: MiniCartItem = {
          size: selectedSize,
          quantity: 1,
        }
        setMiniCartItems([...miniCartItems, item])
      }
      setSelectedSize('')
    } else {
      alert('Please select a size before adding to cart.')
    }
  }
  console.log('Product state in App:', product)
  return (
    <div className="app-container">
      <FetchProduct
        onFetchSuccess={handleFetchSuccess}
        onFetchError={handleFetchError}
      />
      <Product
        product={product}
        selectedSize={selectedSize}
        onSizeChange={handleSizeChange}
        onAddToCart={handleAddToCart}
      />
      <MiniCart miniCartItems={miniCartItems} />
    </div>
  )
}

export default App
