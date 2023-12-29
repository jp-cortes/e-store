'use client'

import Image from 'next/image';
import Link from 'next/link';
import { getCategories, getCategoryById } from '../services';
import { useFetch } from '../hooks/infiniteQuery';
import { GridHomeSkeleton } from './Skeletons/GridHomeSkeleton';


async function fetchCategories() {
  // Get categories
  const categories = await getCategories();
  // return the categories
  return categories;
}

export function GridHome() {  
 // hook
 const { data, isLoading } = useFetch({ query: ['categories'], queryFunction: fetchCategories });
 // data is return as an array of arrays
 // the flatMap will return one array of categories
 const categories = data?.pages.flatMap((category: Category) => category).slice(0, 3);

const featured = categories?.at(0);
const newBrands = categories?.at(1);
const promotions = categories?.at(2);

if(isLoading){
  return <GridHomeSkeleton />
} 

  return (
    <>
    <div className=" grid grid-cols-1 md:grid-cols-3 md:grid-rows-4 md:px-4 gap-2 px-2 mt-2">
     <div
     className=' cursor-pointer md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-5  rounded-lg relative'>
      <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>Featured</span>
          
        <Link href={`/categories/${featured?.id}/${featured?.name}`} passHref>
          <Image 
            className='w-full h-full object-cover rounded-lg' 
            src={featured?.image || ''}
            alt={featured?.name || ''} 
            width={640}
            height={480}
            />
          </Link>

      </figure>
        <div className="absolute bottom-[120px] right-3 flex items-center justify-center flex-col">
              <div className="inline-flex bg-purple-200 p-4 text-lg font-semibold text-black rounded-xl capitalize">
                {featured?.name}
              </div>
          </div>
    </div>
    <div
    className=' cursor-pointer md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3  rounded-lg relative'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>New Brands</span>
            <Link href={`/categories/${newBrands?.id}/${newBrands?.name}`} passHref>
            <Image 
            className='w-full h-full object-cover rounded-lg' 
            src={newBrands?.image || ''} 
            alt={newBrands?.name || ''} 
            width={640}
            height={480}
            />
            </Link>

        </figure>
        <div className="absolute bottom-10 right-2 flex items-center justify-center flex-col">
              <div className="inline-flex bg-yellow-100 p-4 text-lg font-semibold text-black rounded-xl capitalize">
              {newBrands?.name}
              </div>
        </div>
    </div>
    <div
    className=' cursor-pointer md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-5 rounded-lg relative'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>Promotions</span>
            <Link href={`/categories/${promotions?.id}/${promotions?.name}`} passHref>
            <Image 
            className='w-full h-full object-cover rounded-lg' 
            src={promotions?.image || ''} 
            alt={promotions?.name || ''} 
            width={640}
            height={480}
            />
            </Link>

  
        </figure>
        <div className="absolute bottom-10 right-2 flex items-center justify-center flex-col">
              <div className="inline-flex bg-green-100 p-4 text-lg font-semibold text-black rounded-xl capitalize">
              {promotions?.name}
              </div>
        </div>
    </div>
    </div>
    
    </>
  )
}