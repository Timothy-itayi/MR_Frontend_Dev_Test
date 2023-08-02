import React, { useEffect } from 'react'
import request from 'superagent'

interface ProductItem {
  id: number
  title: string
  description: string
  price: number
  imageURL: string
  sizeOptions: { id: number; label: string }[]
}

interface FetchProductProps {
  onFetchSuccess: (data: ProductItem) => void
  onFetchError: (error: Error) => void
}

const FetchProduct: React.FC<FetchProductProps> = ({
  onFetchSuccess,
  onFetchError,
}) => {
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await request.get(
        'https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product'
      )
      const data = response.body as ProductItem
      console.log('Fetched product data:', data)
      onFetchSuccess(data)
    } catch (error) {
      console.error('Error fetching product data:', error)
      onFetchError(error as Error)
    }
  }

  return null
}

export default FetchProduct
