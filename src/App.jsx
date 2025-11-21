import { useState, useEffect, useMemo } from 'react'
import { fetchProducts } from './api/fetchProducts'
import ProductGrid from './components/ProductGrid'
import LoadingState from './components/LoadingState'
import ErrorState from './components/ErrorState'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setError('Không thể kết nối đến server!'))
      .finally(() => setLoading(false))
  }, [])

  const filteredProducts = useMemo(() => {
    let result = [...products]
    return result
  }, [products])

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow-sm sticky top-0 z-40'>
        <div className='max-w-7xl mx-auto px-6 py-6'>
          <h1 className='text-4xl font-bold text-gray-900'>Fake Store</h1>
        </div>
      </header>

      <main className='max-w-7xl mx-auto px-6 py-10'>
        {loading && <LoadingState />}
        {error && <ErrorState message={error} />}
        {!loading && !error && filteredProducts.length === 0 && (
          <div className='text-center py-32'>
            <p className='text-2xl text-gray-500'>
              Không tìm thấy sản phẩm nào
            </p>
          </div>
        )}
        {!loading && !error && filteredProducts.length > 0 && (
          <ProductGrid
            products={filteredProducts}
            onViewDetail={setSelectedProduct}
          />
        )}
      </main>
    </div>
  )
}

export default App

