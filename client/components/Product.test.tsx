import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Product from './Product'

describe('Product', () => {
  const mockProduct = {
    id: 1,
    title: 'Test Product',
    description: 'This is a test product',
    price: 50,
    imageURL: 'https://example.com/test-product.jpg',
    sizeOptions: [
      { id: 1, label: 'S' },
      { id: 2, label: 'M' },
      { id: 3, label: 'L' },
    ],
  }

  it('should display the correct product information', () => {
    const { getByText, getByAltText } = render(
      <Product
        product={mockProduct}
        selectedSize="M"
        onSizeChange={() => {}}
        onAddToCart={() => {}}
      />
    )

    const titleElement = getByText('Test Product')
    const descriptionElement = getByText('This is a test product')
    const sizeSButton = getByText('S')
    const sizeMButton = getByText('M')
    const sizeLButton = getByText('L')
    const imageElement = getByAltText('Test Product')

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
    expect(sizeSButton).toBeInTheDocument()
    expect(sizeMButton).toBeInTheDocument()
    expect(sizeLButton).toBeInTheDocument()
    expect(imageElement).toBeInTheDocument()
  })

  // Add more test cases for the `handleSizeChange` and `handleAddToCart` functions if needed.
})
