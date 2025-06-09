import React from 'react'
import Image from './Image'

const Comment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className="flex items-center gap-4">
            <Image src='userImg.jpeg' className='w-10 h-10 rounded-full object-cover' w='40'  />
            <span className='font-medium'>John Doe</span>
            <span className='text-sm text-gray-600 '></span>
        </div>
        <div className="mt-8">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ut, nulla eaque minus quisquam magnam atque veniam? Eveniet beatae voluptates iste tempora, alias ullam quos dolores molestias ducimus voluptatibus fugit!</p>
        </div>
    </div>
  )
}

export default Comment