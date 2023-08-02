import React from 'react'
import { render } from '@testing-library/react'
import FetchProduct from './FetchProduct'

// Mock the superagent module
jest.mock('superagent', () => ({
  get: jest.fn().mockResolvedValue({
    body: {
      id: 1,
      title: 'Classic Tee',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      price: 75,
      imageURL:
        'https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg',
      sizeOptions: [
        { id: 1, label: 'S' },
        { id: 2, label: 'M' },
        { id: 3, label: 'L' },
      ],
    },
  }),
}))

describe('FetchProduct', () => {
  it('should fetch product data and call onFetchSuccess', async () => {
    // Mock the onFetchSuccess function
    const mockOnFetchSuccess = jest.fn()

    // Render the FetchProduct component
    render(
      <FetchProduct
        onFetchSuccess={mockOnFetchSuccess}
        onFetchError={jest.fn()}
      />
    )

    // Wait for the component to complete its API request and call onFetchSuccess
    await Promise.resolve()

    // Assert that onFetchSuccess has been called with the expected data
    expect(mockOnFetchSuccess).toHaveBeenCalledWith({
      id: 1,
      title: 'Classic Tee',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      price: 75,
      imageURL:
        'https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg',
      sizeOptions: [
        { id: 1, label: 'S' },
        { id: 2, label: 'M' },
        { id: 3, label: 'L' },
      ],
    })
  })

  it('should call onFetchError if fetching fails', async () => {
    // Mock the onFetchError function
    const mockOnFetchError = jest.fn()

    // Mock the API request to throw an error
    jest
      .spyOn(require('superagent'), 'get')
      .mockRejectedValue(new Error('API request failed'))

    // Render the FetchProduct component
    render(
      <FetchProduct
        onFetchSuccess={jest.fn()}
        onFetchError={mockOnFetchError}
      />
    )

    // Wait for the component to complete its API request and call onFetchError
    await Promise.resolve()

    // Assert that onFetchError has been called with the expected error
    expect(mockOnFetchError).toHaveBeenCalledWith(
      new Error('API request failed')
    )
  })
})
