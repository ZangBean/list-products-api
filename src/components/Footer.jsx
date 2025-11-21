import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Github,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white mt-20'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h2 className='text-2xl font-bold mb-4'>FakeStore</h2>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Cửa hàng demo xây dựng bằng React + Tailwind CSS.
            </p>
            <div className='flex gap-4 mt-6'>
              <a href='#' className='hover:text-blue-400 transition'>
                <Facebook className='w-6 h-6' />
              </a>
              <a href='#' className='hover:text-pink-400 transition'>
                <Instagram className='w-6 h-6' />
              </a>
              <a href='#' className='hover:text-red-500 transition'>
                <Youtube className='w-6 h-6' />
              </a>
              <a
                href='https://github.com/zangbean'
                className='hover:text-gray-300 transition'
              >
                <Github className='w-6 h-6' />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Liên kết</h3>
            <ul className='space-y-2 text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition'>
                  Trang chủ
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition'>
                  Sản phẩm
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition'>
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition'>
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Hỗ trợ</h3>
            <ul className='space-y-3 text-gray-400'>
              <li className='flex items-center gap-3'>
                <Mail className='w-5 h-5' />
                <span className='text-sm'>support@fakestore.com</span>
              </li>
              <li className='flex items-center gap-3'>
                <Phone className='w-5 h-5' />
                <span className='text-sm'>1900 1234</span>
              </li>
              <li className='flex items-center gap-3'>
                <MapPin className='w-5 h-5' />
                <span className='text-sm'>Hà Nội - TP.HCM - Đà Nẵng</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Nhận ưu đãi</h3>
            <p className='text-gray-400 text-sm mb-4'>
              Đăng ký để nhận mã giảm giá 10% cho đơn hàng đầu tiên!
            </p>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm'>
          <p>
            © 2025 FakeStore. Made with
            <span className='text-red-500 mx-1'>❤️</span>
            by{' '}
            <a
              href='https://github.com/ZangBean'
              target='_blank'
              rel='noopener noreferrer'
              className='underline hover:text-white transition'
            >
              Thân Trường Giang
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
