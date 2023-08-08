'use client'

import Image from 'next/image';
import Link from 'next/link';
import { getCategoryById } from '../services';




export async function GridHome() {  
const category1 = await getCategoryById('1')
const category2 = await getCategoryById('2')
const category3 = await getCategoryById('3')

  return (
    <>
    <div className=" grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 md:px-4 gap-2 px-2">
     <div
     className=' cursor-pointer md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-5  rounded-lg relative'>
      <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{category1.name}</span>
          
        <Link href={`/categories/${category1.id}-${category1.name}`} passHref>
          <Image 
            className='w-full h-full object-cover rounded-lg' 
            src={category1.image}
            alt={category1.name} 
            width={640}
            height={480}
            />
          </Link>

      </figure>
        <div className="absolute bottom-[120px] right-3 flex items-center justify-center flex-col">
              <div className="inline-flex bg-purple-200 p-4 text-lg font-semibold text-black rounded-xl ">
                Featured
              </div>
          </div>
    </div>
    <div
    className=' cursor-pointer md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3  rounded-lg relative'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{category2.name}</span>
            <Link href={`/catetories/${category2.id}-${category2.name}`} passHref>
            <Image 
            className='w-full h-full object-cover rounded-lg' 
            src={category2.image} 
            alt={category2.name} 
            width={640}
            height={480}
            />
            </Link>

        </figure>
        <div className="absolute bottom-10 right-2 flex items-center justify-center flex-col">
              <div className="inline-flex bg-yellow-100 p-4 text-lg font-semibold text-black rounded-xl">
                New Brands
              </div>
        </div>
    </div>
    <div
    className=' cursor-pointer md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-5 rounded-lg relative'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{category3.name}</span>
            <Link href={`/categories/${category3.id}-${category3.name}`} passHref>
            <Image 
            className='w-full h-full object-cover rounded-lg' 
            src={category3.image} 
            alt={category3.name} 
            width={640}
            height={480}
            />
            </Link>

  
        </figure>
        <div className="absolute bottom-10 right-2 flex items-center justify-center flex-col">
              <div className="inline-flex bg-green-100 p-4 text-lg font-semibold text-black rounded-xl">
               Promotions
              </div>
        </div>
    </div>
    </div>
    </>
  )
}