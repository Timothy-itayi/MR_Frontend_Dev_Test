import React from 'react'
import { render } from '@testing-library/react'
import MiniCart from './MiniCart'

describe('MiniCart', () => {
  it('should display the correct total number of items in the cart', () => {
    const miniCartItems = [
      {
        size: 'M',
        quantity: 2,
        price: 75,
        totalPrice: 150,
        product: {
          id: 1,
          title: 'Classic Tee',
          imageURL: 'https://example.com/classic-tee.jpg',
        },
      },
      // Add more cart items as needed for testing
    ]
    const totalPrice = 150

    const { getByText } = render(
      <MiniCart miniCartItems={miniCartItems} totalPrice={totalPrice} />
    )

    // Assert that the cart icon displays the correct total number of items in the cart
    const cartItemCount = getByText('2') // Update this with the expected total number of items
    expect(cartItemCount).toBeInTheDocument()
  })

  it('should display the correct product information for each cart item', () => {
    const miniCartItems = [
      {
        size: 'M',
        quantity: 2,
        price: 75,
        totalPrice: 150,
        product: {
          id: 1,
          title: 'Classic Tee',
          imageURL: 'https://example.com/classic-tee.jpg',
        },
      },
      // Add more cart items as needed for testing
    ]
    const totalPrice = 150

    const { getByText, getByAltText } = render(
      <MiniCart miniCartItems={miniCartItems} totalPrice={totalPrice} />
    )

    // Assert that each cart item displays the correct product information
    miniCartItems.forEach((item) => {
      const title = getByText(item.product.title)
      const size = getByText(`Size: ${item.size}`)
      const quantity = getByText(`Quantity: ${item.quantity}`)
      const price = getByText(`Price: $${item.price}`)
      const totalPrice = getByText(`Total: $${item.totalPrice}`)
      const productImage = getByAltText(item.product.title)

      expect(title).toBeInTheDocument()
      expect(size).toBeInTheDocument()
      expect(quantity).toBeInTheDocument()
      expect(price).toBeInTheDocument()
      expect(totalPrice).toBeInTheDocument()
      expect(productImage).toBeInTheDocument()
      expect(productImage).toHaveAttribute('src', item.product.imageURL)
    })
  })

  it('should display the correct total price in the cart', () => {
    const miniCartItems = [
      {
        size: 'M',
        quantity: 2,
        price: 75,
        totalPrice: 150,
        product: {
          id: 1,
          title: 'Classic Tee',
          imageURL: 'https://example.com/classic-tee.jpg',
        },
      },
      // Add more cart items as needed for testing
    ]
    const totalPrice = 150

    const { getByText } = render(
      <MiniCart miniCartItems={miniCartItems} totalPrice={totalPrice} />
    )

    // Assert that the total price displayed in the cart is correct
    const cartTotalPrice = getByText('Total Price: $150') // Update this with the expected total price
    expect(cartTotalPrice).toBeInTheDocument()
  })
})
