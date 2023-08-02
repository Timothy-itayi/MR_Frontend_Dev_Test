import React from 'react'

interface MiniCartItem {
  size: string
  quantity: number
  price: number
  totalPrice: number // Add the totalPrice property to each cart item
}

interface MiniCartProps {
  miniCartItems: MiniCartItem[]
  totalPrice: number // Add the totalPrice for the entire cart
}

const MiniCart: React.FC<MiniCartProps> = ({ miniCartItems, totalPrice }) => {
  const getTotalItems = () => {
    return miniCartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="mini-cart-container">
      <div className="cart-icon">
        <span className="cart-item-count">{getTotalItems()}</span>
      </div>
      <ul className="cart-items">
        {miniCartItems.map((item, index) => (
          <li key={index}>
            {item.size} - {item.quantity} (Price: ${item.price}, Total: $
            {item.totalPrice})
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
