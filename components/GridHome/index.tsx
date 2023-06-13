import React from 'react'
import { getProductsByCategoryName } from '../../services'

type Props = {}

export default  async function GridHome({}: Props) {
  const products = await getProductsByCategoryName('sports');

  return (
    <div className="bg-white grid grid-cols-3 grid-rows-4 gap-2">
    <div className='bg-white cursor-pointer col-start-1 col-end-3 row-start-1 row-end-5  rounded-lg relative'>
    <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{products[0].category.name}</span>
            <img className='w-full h-full object-cover rounded-lg' 
            src={products[0].image}
            alt={products[0].name} />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 pb-1'>
                +
            </div>
        </figure>
        <div className="absolute bottom-[120px] right-3 flex items-center justify-center">
              <div className="inline-flex bg-white p-4 text-lg font-semibold text-black rounded-xl ">
                {products[0].name}
              </div>
            </div>
    </div>
    <div className='bg-white cursor-pointer col-start-3 col-end-4 row-start-1 row-end-3  rounded-lg relative'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{products[1].category.name}</span>
            <img className='w-full h-full object-cover rounded-lg' 
            src={products[1].image} 
            alt={products[1].name} />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 pb-1'>
                +
            </div>
        </figure>
        <div className="absolute bottom-11 right-2 flex items-center justify-center">
              <div className="inline-flex bg-white p-4 text-lg font-semibold text-black rounded-xl">
                {products[1].name}
              </div>
            </div>
    </div>
    <div className='bg-white cursor-pointer col-start-3 col-end-4 row-start-3 row-end-5 rounded-lg relative'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{products[2].category.name}</span>
            <img className='w-full h-full object-cover rounded-lg' 
            src={products[2].image} 
            alt={products[2].name} />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 pb-1'>
                +
            </div>
        </figure>
        <div className="absolute bottom-11 right-2 flex items-center justify-center">
              <div className="inline-flex bg-white p-4 text-lg font-semibold text-black rounded-xl">
               {products[2].name}
              </div>
            </div>
    </div>
   </div>
  )
}