import { X, Star } from 'lucide-react'

export default function ProductModal({ product, onClose }) {
  if (!product) return null

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-6 h-6 ${
            i <= Math.round(product.rating.rate)
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-gray-300'
          }`}
        />
      )
    }
    return stars
  }

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div
        className='bg-white rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto animate-scaleIn shadow-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='grid md:grid-cols-2 gap-10 p-8'>
          <div className='flex justify-center'>
            <img
              src={product.image}
              alt={product.title}
              className='max-w-full h-96 object-contain bg-gray-50 rounded-xl'
            />
          </div>

          <div className='flex flex-col justify-center'>
            <h2 className='text-3xl font-bold text-gray-900'>
              {product.title}
            </h2>

            <div className='flex items-center gap-3 mt-4'>
              <div className='flex'>{renderStars()}</div>
              <span className='text-lg font-medium text-gray-700'>
                {product.rating.rate} ({product.rating.count} đánh giá)
              </span>
            </div>

            <p className='text-4xl font-bold text-blue-600 mt-6'>
              ${product.price}
            </p>

            <div className='mt-8 pt-8 border-t'>
              <p className='text-gray-700 leading-relaxed text-lg'>
                {product.description}
              </p>
            </div>

            <div className='mt-10'>
              <span className='text-sm text-gray-500'>Danh mục:</span>
              <span className='ml-2 text-sm font-medium text-blue-600 capitalize'>
                {product.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className='mt-10 w-full bg-gray-900 text-white py-4 rounded-xl hover:bg-black transition text-lg font-semibold'
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
