import { useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products, onViewDetail }) {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const totalPages = Math.ceil(products.length / itemsPerPage)
  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handlePageChange = (page) => {
    setCurrentPage(page)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {displayedProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetail={onViewDetail}
            delay={index * 150}
          />
        ))}
      </div>

      <div className='flex justify-center mt-8 gap-3'>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-lg border cursor-pointer ${
              currentPage === i + 1
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700'
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
