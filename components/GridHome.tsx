'use client'

import Image from 'next/image';
import Link from 'next/link';
import { getCategoryById } from '../services';




export async function GridHome() {  
const featured = await getCategoryById('1');
const newBrands = await getCategoryById('2');
const promotions = await getCategoryById('3');

  return (
    <>
    <div className=" grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 md:px-4 gap-2 px-2">
     <div
     className=' cursor-pointer md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-5  rounded-lg relative'>
      <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>Featured</span>
          
        <Link href={`/categories/${featured.id}/${featured.name}`} passHref>
          <Image 
            className='w-full h-full object-cover rounded-lg' 
            src={featured.image}
            alt={featured.name} 
            width={640}
            height={480}
            />
          </Link>

      </figure>
        <div className="absolute bottom-[120px] right-3 flex items-center justify-center flex-col">
              <div className="inline-flex bg-purple-200 p-4 text-lg font-semibold text-black rounded-xl ">
                {featured.name}
              </div>
          </div>
    </div>
    <div
    className=' cursor-pointer md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3  rounded-lg relative'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>New Brands</span>
            <Link href={`/categories/${newBrands.id}/${newBrands.name}`} passHref>
            <Image 
            className='w-full h-full object-cover rounded-lg' 
            src={newBrands.image} 
            alt={newBrands.name} 
            width={640}
            height={480}
            />
            </Link>

        </figure>
        <div className="absolute bottom-10 right-2 flex items-center justify-center flex-col">
              <div className="inline-flex bg-yellow-100 p-4 text-lg font-semibold text-black rounded-xl">
              {newBrands.name}
              </div>
        </div>
    </div>
    <div
    className=' cursor-pointer md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-5 rounded-lg relative'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>Promotions</span>
            <Link href={`/categories/${promotions.id}/${promotions.name}`} passHref>
            <Image 
            className='w-full h-full object-cover rounded-lg' 
            src={promotions.image} 
            alt={promotions.name} 
            width={640}
            height={480}
            />
            </Link>

  
        </figure>
        <div className="absolute bottom-10 right-2 flex items-center justify-center flex-col">
              <div className="inline-flex bg-green-100 p-4 text-lg font-semibold text-black rounded-xl">
              {promotions.name}
              </div>
        </div>
    </div>
    </div>
    </>
  )
}