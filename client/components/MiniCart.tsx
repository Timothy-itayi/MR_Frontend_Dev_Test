import React, { useState } from 'react'

interface MiniCartItem {
  size: string
  quantity: number
  price: number
  totalPrice: number // Add the totalPrice property to each cart item
  product: {
    id: number
    title: string
    imageURL: string
  }
}

interface MiniCartProps {
  miniCartItems: MiniCartItem[]
  totalPrice: number // Add the totalPrice for the entire cart
}

const MiniCart: React.FC<MiniCartProps> = ({ miniCartItems, totalPrice }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const getTotalItems = () => {
    return miniCartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className={`mini-cart-container ${isCollapsed ? 'collapsed' : ''}`}>
      <button
        className="cart-toggle-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? 'Expand' : 'Collapse'}
      </button>
      <div className="cart-icon">
        <span className="cart-item-count">{getTotalItems()}</span>
      </div>
      <ul className="cart-items">
        {miniCartItems.map((item, index) => (
          <li key={index}>
            <div className="cart-item">
              <img src={item.product.imageURL} alt={item.product.title} />
              <div>
                <p>{item.product.title}</p>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <p>Total: ${item.totalPrice}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <strong>Total Price: ${totalPrice}</strong>
      </div>
    </div>
  )
}

export default MiniCart
