'use client'

import { getProductsByCategoryName } from '../../services'
import { AddToCartButton } from '../Card/AddToCartButton';

type Props = {}

export async function GridHome({}: Props) {
  
   function showProduct() {
  console.log('click')
  }

  const products = await getProductsByCategoryName('sports');

  return (
    <div className="bg-white grid grid-cols-3 grid-rows-4 gap-2">
     <div
     className='bg-white cursor-pointer col-start-1 col-end-3 row-start-1 row-end-5  rounded-lg relative'>
      <figure 
       onClick={(e) => {
        e.stopPropagation();
        showProduct(products[0].id);
      }}
         className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{products[0].category.name}</span>
            <img 
            className='w-full h-full object-cover rounded-lg' 
            src={products[0].image}
            alt={products[0].name} />
            <AddToCartButton product={products[0]}/>
      </figure>
        <div className="absolute bottom-[120px] right-3 flex items-center justify-center flex-col">
              <div className="inline-flex bg-white p-4 text-lg font-semibold text-black rounded-xl ">
                {products[0].name}
              </div>
              <div className="inline-flex bg-white px-2 text-lg mt-2 font-semibold text-black rounded-lg">
                ${products[1].price}
              </div>
          </div>
    </div>
    <div
    className='bg-white cursor-pointer col-start-3 col-end-4 row-start-1 row-end-3  rounded-lg relative'>
        <figure 
         onClick={(e) => {
          e.stopPropagation();
          showProduct(products[1].id);
        }}
        className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{products[1].category.name}</span>
            <img 
            className='w-full h-full object-cover rounded-lg' 
            src={products[1].image} 
            alt={products[1].name} />
            <AddToCartButton product={products[1]}/>
        </figure>
        <div className="absolute bottom-10 right-2 flex items-center justify-center flex-col">
              <div className="inline-flex bg-white p-4 text-lg font-semibold text-black rounded-xl">
                {products[1].name}
              </div>
              <div className="inline-flex bg-white px-2 text-lg mt-2 font-semibold text-black rounded-lg">
                ${products[1].price}
              </div>
        </div>
    </div>
    <div
    className='bg-white cursor-pointer col-start-3 col-end-4 row-start-3 row-end-5 rounded-lg relative'>
        <figure 
         onClick={(e) => {
          e.stopPropagation();
          showProduct(products[2].id);
        }}
        className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{products[2].category.name}</span>
            <img 
            className='w-full h-full object-cover rounded-lg' 
            src={products[2].image} 
            alt={products[2].name} />
            <AddToCartButton product={products[2]}/>
        </figure>
        <div className="absolute bottom-10 right-2 flex items-center justify-center flex-col">
              <div className="inline-flex bg-white p-4 text-lg font-semibold text-black rounded-xl">
               {products[2].name}
              </div>
              <div className="inline-flex bg-white px-2 text-lg mt-2 font-semibold text-black rounded-lg">
                ${products[2].price}
              </div>
        </div>
    </div>
   </div>
  )
}