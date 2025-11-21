import { Search } from 'lucide-react'

export default function SearchSortBar({
  searchValue,
  onSearch,
  sortValue,
  onSort,
}) {
  return (
    <div className='flex flex-col sm:flex-row gap-4 mb-10'>
      {/* Ô tìm kiếm */}
      <div className='relative flex-1'>
        <Search className='absolute left-4 top-4 h-5 w-5 text-gray-400' />
        <input
          type='text'
          placeholder='Tìm kiếm sản phẩm...'
          value={searchValue}
          onChange={(e) => onSearch(e.target.value)}
          className='w-full pl-12 pr-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-lg'
        />
      </div>

      <select
        value={sortValue}
        onChange={(e) => onSort(e.target.value)}
        className='px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-lg min-w-[200px]'
      >
        <option value=''>Mặc định</option>
        <option value='price-asc'>Giá: Thấp → Cao</option>
        <option value='price-desc'>Giá: Cao → Thấp</option>
        <option value='rating-desc'>Đánh giá cao nhất</option>
        <option value='rating-asc'>Đánh giá thấp nhất</option>
      </select>
    </div>
  )
}
