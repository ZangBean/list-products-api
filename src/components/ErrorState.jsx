import { AlertCircle } from 'lucide-react'

export default function ErrorState({ message }) {
  return (
    <div className='flex flex-col items-center justify-center py-32 text-center'>
      <AlertCircle className='h-16 w-16 text-red-500 mb-4' />
      <p className='text-xl text-red-600 font-medium'>
        {message || 'Đã có lỗi xảy ra!'}
      </p>
    </div>
  )
}
