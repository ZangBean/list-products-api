export default function SortSelect({ value, onChange }) {
  return (
    <div className='relative h-12'>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='appearance-none bg-white border border-gray-300 rounded-xl px-5 py-2 pr-12 text-lg font-medium text-gray-700
         focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-200 cursor-pointer shadow-sm hover:border-gray-400
         w-58'
      >
        <option value=''>Mặc định</option>
        <option value='price-asc'>Giá: Thấp → Cao</option>
        <option value='price-desc'>Giá: Cao → Thấp</option>
        <option value='rating-desc'>Đánh giá cao nhất</option>
        <option value='rating-asc'>Đánh giá thấp nhất</option>
      </select>

      <div className='absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none'>
        <svg
          className='w-5 h-5 text-gray-500'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M19 9l-7 7-7-7'
          />
        </svg>
      </div>
    </div>
  )
}
