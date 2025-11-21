import { Loader2 } from 'lucide-react'

export default function LoadingState() {
  return (
    <div className='flex flex-col items-center justify-center py-32'>
      <Loader2 className='h-16 w-16 animate-spin text-blue-600' />
      <p className='mt-6 text-xl text-gray-600'>Đang tải sản phẩm...</p>
    </div>
  )
}
