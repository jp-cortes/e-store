import React from 'react'

type Props = {}

export default function GridHome({}: Props) {
  return (
    <div className="bg-white grid grid-cols-3 grid-rows-4 gap-2">
    <div className='bg-white cursor-pointer col-start-1 col-end-3 row-start-1 row-end-5  rounded-lg'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Electronics</span>
            <img className='w-full h-full object-cover rounded-lg' 
            src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="product" />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
                +
            </div>
        </figure>
        <p className='flex justify-between px-4'>
            <span className='text-sm font-light capitalize'>headphones</span>
            <span className='text-lg font-medium'>$500</span>
        </p>
    </div>
    <div className='bg-white cursor-pointer col-start-3 col-end-4 row-start-1 row-end-3  rounded-lg'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Electronics</span>
            <img className='w-full h-full object-cover rounded-lg' 
            src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="product" />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
                +
            </div>
        </figure>
        <p className='flex justify-between px-4'>
            <span className='text-sm font-light capitalize'>headphones</span>
            <span className='text-lg font-medium'>$500</span>
        </p>
    </div>
    <div className='bg-white cursor-pointer col-start-3 col-end-4 row-start-3 row-end-5 rounded-lg'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>Electronics</span>
            <img className='w-full h-full object-cover rounded-lg' 
            src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="product" />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
                +
            </div>
        </figure>
        <p className='flex justify-between px-4'>
            <span className='text-sm font-light capitalize'>headphones</span>
            <span className='text-lg font-medium'>$500</span>
        </p>
    </div>
   </div>
  )
}