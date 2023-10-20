'use client'

import { getCategories } from '../services';
import Link from 'next/link';
import Image from 'next/image';


export async function Carousel() {

 
  const categories = await getCategories();


  return (
    <>
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-[marquee_60s_linear_infinite]">
        {categories.slice(3,9).map((category) => (
     
          <Link
          passHref
            key={category.id}
            href={`/categories/${category.id}/${category.name}`}
            className="relative h-[30vh] w-full flex-none md:w-1/3">
              <Image
              alt={category.name}
              className="h-full object-contain"
              fill
              sizes="33vw"
              src={category.image}
              />
      
             
            <div className="absolute bottom-4 right-0 flex items-center justify-center flex-col">
              <div className="w-32 inline-flex bg-orange-200 p-4 text-lg font-semibold text-black rounded-xl capitalize justify-center">
                {category.name}
              </div>
            </div>
          </Link>
        
        ))}
      </div>
    </div>
    
    </>
  );
}