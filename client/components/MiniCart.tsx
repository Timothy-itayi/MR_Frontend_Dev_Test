import React from 'react'

interface MiniCartItem {
  size: string
  quantity: number
}

interface MiniCartProps {
  miniCartItems: MiniCartItem[]
}

const MiniCart: React.FC<MiniCartProps> = ({ miniCartItems }) => {
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
            {item.size} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MiniCart
