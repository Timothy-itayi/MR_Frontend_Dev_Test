import React, { useEffect } from 'react'
import request from 'superagent'

interface FetchProductProps {
  onFetchSuccess: (data: ProductItem) => void
  onFetchError: (error: Error) => void
}

interface ProductItem {
  name: string
  description: string
  sizes: string[]
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
      onFetchSuccess(response.body as ProductItem)
    } catch (error) {
      onFetchError(error as Error)
    }
  }

  return null // No need to render anything in this component
}

export default FetchProduct
