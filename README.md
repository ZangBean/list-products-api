# FakeStore React Project

## 1. Cách chạy project

1. Clone repository về máy:
   ```bash
   git clone <https://github.com/ZangBean/list-products-api.git>
   ```
2. Cài dependencies:
  ```bash
    npm install
  ```
3. Chạy project:
  ```bash
    npm run dev
  ```

## 2. Những phần đã hoàn thành
- Hiển thị danh sách sản phẩm
- Tìm kiếm sản phẩm
- Hiển thị chi tiết sản phẩm
- Giao diện & Trải nghiệm

## 3.Phần AI Usage
- Prompt: **Style lại card product trông đẹp hơn**
- Đoạn code AI trả về :
  ```bash
    <div className='relative aspect-square bg-gray-50 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none' />
        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0'>
          <button className='flex items-center gap-3 bg-white text-gray-800 px-4 py-2 rounded-full font-bold text-lg shadow-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 border-2 border-gray-200 cursor-pointer'>
            <Eye className='w-6 h-6' />
            Xem chi tiết
          </button>
        </div>
      </div>
  ```
- Tôi đã thêm điều kiện để khi rate >= 4 thì hiện chữ HOT trên sản phẩm:
  ```bash
  const isHot = rate >= 4
  -------------------------
  <div className='relative aspect-square bg-gray-50 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110'
        />
  
        // Rate >= 4
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
  ```
  ---
   
