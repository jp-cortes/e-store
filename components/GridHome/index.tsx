'use client'

import Image from 'next/image';
import { getAllProducts } from '../../services'
import Link from 'next/link';
import { useEffect } from 'react';


type Props = {}

export async function GridHome({}: Props) {  
  const products = await getAllProducts();


// useEffect(() => {
// async function fetchData() {

// }
// },[])


  return (
    <>
    <div className="bg-white grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 md:px-4 gap-2">
     <div
     className='bg-white cursor-pointer md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-5  rounded-lg relative'>
      <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{products[0].category.name}</span>
          
        <Link href={`/products/${products[0].id}-${products[0].name}`}>
          <Image 
            className='w-full h-full object-cover rounded-lg' 
            src={products[0].image}
            alt={products[0].name} 
            width={640}
            height={480}
            />
          </Link>

      </figure>
        <div className="absolute bottom-[120px] right-3 flex items-center justify-center flex-col">
              <div className="inline-flex bg-white p-4 text-lg font-semibold text-black rounded-xl ">
                {products[0].name}
              </div>
              <div className="inline-flex bg-white px-2 text-lg mt-2 font-semibold text-black rounded-lg">
                ${products[0].price}
              </div>
          </div>
    </div>
    <div
    className='bg-white cursor-pointer md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3  rounded-lg relative'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{products[1].category.name}</span>
            <Link href={`/products/${products[1].id}-${products[1].name}`}>
            <Image 
            className='w-full h-full object-cover rounded-lg' 
            src={products[1].image} 
            alt={products[1].name} 
            width={640}
            height={480}
            />
            </Link>

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
    className='bg-white cursor-pointer md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-5 rounded-lg relative'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{products[2].category.name}</span>
            <Link href={`/products/${products[2].id}-${products[2].name}`}>
            <Image 
            className='w-full h-full object-cover rounded-lg' 
            src={products[2].image} 
            alt={products[2].name} 
            width={640}
            height={480}
            />
            </Link>

  
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
    </>
  )
}