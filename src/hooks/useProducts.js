import { useState, useEffect } from 'react'
import { fetchProducts } from '../api/fetchProducts'

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setError('Không thể kết nối đến server!'))
      .finally(() => setLoading(false))
  }, [])

  return { products, loading, error }
}
