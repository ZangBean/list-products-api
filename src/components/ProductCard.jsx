import { useEffect, useState } from 'react'
import { Star, Eye } from 'lucide-react'

export default function ProductCard({
  product,
  onViewDetail,
  delay = 0,
  searchTerm,
}) {
  const { title, price, image, rating } = product
  const { rate = 0, count = 0 } = rating || {}
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [product.id, searchTerm, delay])

  const fullStars = Math.floor(rate)
  const hasHalfStar = rate % 1 >= 0.5

  const isHot = rate >= 4

  return (
    <div
      onClick={() => onViewDetail(product)}
      className={`
        group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
        transition-all duration-700 cursor-pointer overflow-hidden
        border border-gray-100 hover:border-gray-300
        transform
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
      `}
    >
      <div className='relative aspect-square bg-gray-50 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110'
        />

        {isHot && (
          <div className='hot-badge absolute top-1 right-1 text-white text-xs px-2 py-1 text-center'>
            HOT
          </div>
        )}

        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none' />
        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0'>
          <button className='flex items-center gap-3 bg-white text-gray-800 px-4 py-2 rounded-full font-bold text-lg shadow-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 border-2 border-gray-200 cursor-pointer'>
            <Eye className='w-6 h-6' />
            Xem chi tiết
          </button>
        </div>
      </div>

      <div className='p-5 space-y-3'>
        <h3 className='font-semibold text-lg line-clamp-2 text-gray-800 leading-tight'>
          {title}
        </h3>
        <div className='flex items-center gap-2'>
          <div className='flex items-center'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < fullStars
                    ? 'fill-yellow-400 text-yellow-400'
                    : i === fullStars && hasHalfStar
                    ? 'fill-yellow-400/50 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className='text-sm text-gray-500'>({count})</span>
        </div>
        <p className='text-3xl font-bold text-blue-600'>${price.toFixed(2)}</p>
      </div>
    </div>
  )
}
