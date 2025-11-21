import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import SortSelect from './components/SortSelect'
import ProductModal from './components/ProductModal'
import useProducts from './hooks/useProducts'
import useFilteredProducts from './hooks/useFilteredProducts'
import useModal from './hooks/useModal'

function App() {
  const { products, loading, error } = useProducts()
  const [searchTerm, setSearchTerm] = useState('')
  const [sortOrder, setSortOrder] = useState('')
  const modal = useModal()

  const filteredProducts = useFilteredProducts(products, searchTerm, sortOrder)

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <Header searchValue={searchTerm} onSearch={setSearchTerm} />

      <main className='flex-1 max-w-7xl mx-auto px-6 py-10 w-full'>
        <div className='flex justify-between mb-8'>
          <h2 className='text-3xl font-semibold text-gray-800'>
            Mua Online - Hàng chuẩn, giá mê
          </h2>
          <SortSelect value={sortOrder} onChange={setSortOrder} />
        </div>

        <MainContent
          loading={loading}
          error={error}
          products={filteredProducts}
          onViewDetail={modal.open}
        />
      </main>

      <Footer />

      <ProductModal product={modal.selected} onClose={modal.close} />
    </div>
  )
}

export default App
