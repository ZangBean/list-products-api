import { useMemo } from 'react'

export default function useFilteredProducts(products, searchTerm, sortOrder) {
  return useMemo(() => {
    let result = [...products]

    if (searchTerm.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
      )
    }

    if (sortOrder) {
      if (sortOrder === 'price-asc') result.sort((a, b) => a.price - b.price)
      else if (sortOrder === 'price-desc')
        result.sort((a, b) => b.price - a.price)
      else if (sortOrder === 'rating-desc')
        result.sort((a, b) => b.rating.rate - a.rating.rate)
      else if (sortOrder === 'rating-asc')
        result.sort((a, b) => a.rating.rate - b.rating.rate)
    }

    return result
  }, [products, searchTerm, sortOrder])
}
