'use client'


import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
  isDetailsPage: boolean;
}

export function Card({ product, isDetailsPage }:Props) {
  


  return (
   <>
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg mx-auto border-b-4 border-solid border-green-600 hover:border-red-500'>
        <figure className="relative mb-2 w-full h-auto">
           {/* {isDetailsPage ? <></> : <span className='absolute bottom-2 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>
            {product.category.name}</span>
            } */}
            
            <Link href={`/products/${product.id}-${product.name}`}>
            <Image
            className='w-auto h-auto object-cover rounded-lg' 
            src={product.image} 
            alt={product.name} width={224} height={224} />
            </Link>

            
        </figure>
        <p className='flex justify-between px-4'>
            <span className='text-sm font-semibold capitalize'>{product.name}</span>
            <span className='text-lg font-medium'>${product.price}</span>
        </p>
    </div>
  
   </>
  
  )
}

