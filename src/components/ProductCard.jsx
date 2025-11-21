import { Star } from 'lucide-react'

export default function ProductCard({ product, onViewDetail }) {
  const { title, price, image, rating } = product
  const { rate, count } = rating || { rate: 0, count: 0 }

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rate)) {
        stars.push(
          <Star key={i} className='w-4 h-4 fill-yellow-400 text-yellow-400' />
        )
      } else if (i === Math.ceil(rate) && rate % 1 >= 0.5) {
        stars.push(
          <Star
            key={i}
            className='w-4 h-4 fill-yellow-400/50 text-yellow-400'
          />
        )
      } else {
        stars.push(<Star key={i} className='w-4 h-4 text-gray-300' />)
      }
    }
    return stars
  }

  return (
    <div
      onClick={() => onViewDetail(product)}
      className='bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden animate-fadeIn'
    >
      <div className='p-6 bg-gray-50 group-hover:bg-gray-100 transition'>
        <img src={image} alt={title} className='w-full h-64 object-contain' />
      </div>

      <div className='p-5'>
        <h3 className='font-medium text-lg line-clamp-2 h-14 text-gray-800'>
          {title}
        </h3>

        <div className='flex items-center gap-2 mt-3'>
          <div className='flex'>{renderStars()}</div>
          <span className='text-sm text-gray-600'>({count})</span>
        </div>

        <p className='text-2xl font-bold text-blue-600 mt-4'>${price}</p>

        <button className='mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300'>
          Xem chi tiết →
        </button>
      </div>
    </div>
  )
}
