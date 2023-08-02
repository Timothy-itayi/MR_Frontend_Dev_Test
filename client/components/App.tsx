import React, { useState } from 'react'
import '../components/index.css'
import Product from './Product'
import MiniCart from './MiniCart'
import FetchProduct from './FetchProduct'

interface MiniCartItem {
  size: string
  quantity: number
  price: number
  totalPrice: number
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
        existingItem.price = existingItem.quantity * product.price
        setMiniCartItems([...miniCartItems])
      } else {
        const item: MiniCartItem = {
          size: selectedSize,
          quantity: 1,
          price: product.price,
          totalPrice: product.price,
        }
        setMiniCartItems([...miniCartItems, item])
      }
      setSelectedSize('')
    } else {
      alert('Please select a size before adding to cart.')
    }
  }

  const getTotalPrice = () => {
    return miniCartItems.reduce((total, item) => total + item.price, 0)
  }

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
      <MiniCart miniCartItems={miniCartItems} totalPrice={getTotalPrice()} />
    </div>
  )
}

export default App
