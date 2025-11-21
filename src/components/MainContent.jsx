import ProductGrid from './ProductGrid'
import LoadingState from './LoadingState'
import ErrorState from './ErrorState'

export default function MainContent({
  loading,
  error,
  products,
  onViewDetail,
}) {
  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} />

  if (products.length === 0)
    return (
      <div className='text-center py-32'>
        <p className='text-3xl font-medium text-gray-500'>
          Không tìm thấy sản phẩm nào
        </p>
        <p className='text-gray-400 mt-4'>Thử tìm với từ khóa khác nhé!</p>
      </div>
    )

  return <ProductGrid products={products} onViewDetail={onViewDetail} />
}
