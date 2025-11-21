import { useNavigate } from 'react-router-dom'
import { ShoppingCart, Menu, User, Search } from 'lucide-react'
import { useState } from 'react'

export default function Header({ searchValue = '', onSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const menuItems = [
    { name: 'Trang chủ', href: '#' },
    { name: 'Sản phẩm', href: '#san-pham' },
    { name: 'Khuyến mãi', href: '#khuyen-mai', badge: 'HOT' },
    { name: 'Giới thiệu', href: '#gioi-thieu' },
    { name: 'Liên hệ', href: '#lien-he' },
  ]

  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between h-16 lg:h-20'>
          <div
            onClick={() => navigate('/')}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/')}
            role='button'
            tabIndex={0}
            className='flex items-center gap-4 cursor-pointer'
          >
            <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-xl'>FS</span>
            </div>

            <h1 className='text-2xl font-bold text-gray-900 sm:block'>
              FakeStore
            </h1>
          </div>

          {/* Menu Desktop */}
          <nav className='hidden lg:flex items-center gap-10 flex-1 justify-center'>
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-gray-700 hover:text-blue-600 font-semibold text-base transition relative'
              >
                {item.name}
                {item.badge && (
                  <span className='hot-badge absolute -top-4 -right-6 text-white text-xs px-2 py-1 text-center'>
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className='flex items-center gap-4'>
            <div className='hidden lg:flex items-center bg-gray-100 rounded-full px-5 py-3 w-80 shadow-sm hover:shadow transition'>
              <Search className='w-5 h-5 text-gray-500 mr-3' />
              <input
                type='text'
                placeholder='Tìm kiếm sản phẩm...'
                value={searchValue}
                onChange={(e) => onSearch(e.target.value)}
                className='bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500'
              />
            </div>

            <button className='hidden lg:block p-2 hover:bg-gray-100 rounded-full transition'>
              <User className='w-6 h-6 text-gray-700 cursor-pointer' />
            </button>

            <div className='relative group'>
              <button className='p-2 hover:bg-gray-100 rounded-full transition relative'>
                <ShoppingCart className='w-6 h-6 text-gray-700 cursor-pointer' />
                <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold'>
                  0
                </span>
              </button>

              {/* Dropdown */}
              <div
                className='absolute right-0 top-full w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 
                opacity-0 scale-95 translate-y-2 pointer-events-none 
                group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 
                group-hover:pointer-events-auto 
                transition-all duration-300 ease-out'
              >
                <div className='p-8 text-center'>
                  <div className='w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4'>
                    <ShoppingCart className='w-10 h-10 text-gray-400' />
                  </div>
                  <p className='text-gray-600 font-medium text-lg mb-4'>
                    Giỏ hàng của bạn đang trống
                  </p>
                  <a
                    href='#san-pham'
                    className='inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition'
                  >
                    Tiếp tục mua sắm
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='lg:hidden p-2 hover:bg-gray-100 rounded-lg'
            >
              <Menu className='w-6 h-6 text-gray-700' />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='lg:hidden border-t border-gray-100 py-4'>
            <div className='px-4 mb-4'>
              <div className='flex items-center bg-gray-100 rounded-full px-4 py-3'>
                <Search className='w-5 h-5 text-gray-500 mr-3' />
                <input
                  type='text'
                  placeholder='Tìm kiếm...'
                  value={searchValue}
                  onChange={(e) => onSearch(e.target.value)}
                  className='bg-transparent outline-none flex-1'
                />
              </div>
            </div>

            <nav className='px-4'>
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='block py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100 last:border-0'
                >
                  <span className='flex justify-between items-center'>
                    {item.name}
                    {item.badge && (
                      <span className='hot-badge text-white text-xs px-2 py-1 text-center'>
                        {item.badge}
                      </span>
                    )}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
