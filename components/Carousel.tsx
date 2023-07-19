'use client'

import Link from 'next/link';
import { getProductsByCategoryId, getProductsByCategoryName } from '../services';
import Image from 'next/image';


export async function Carousel() {

 
  const products = await getProductsByCategoryId('9');


  return (
    <>
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-[marquee_60s_linear_infinite]">
        {[...products].map((product) => (
     
          <Link
          passHref
            key={product.id}
            href={`/products/${product.id}-${product.name}`}
            className="relative h-[30vh] w-full flex-none md:w-1/3">
              <Image
              alt={product.name}
              className="h-full object-contain"
              fill
              sizes="33vw"
              src={product.image}
              />
      
             
            <div className="absolute bottom-4 right-0 flex items-center justify-center flex-col">
              <div className="inline-flex bg-white p-4 text-lg font-semibold text-black rounded-xl">
                {product.name}
              </div>
              <div className="inline-flex bg-white px-2 text-lg mt-2 font-semibold text-black rounded-lg">
                ${product.price}
              </div>
            </div>
          </Link>
        
        ))}
      </div>
    </div>
    
    </>
  );
}