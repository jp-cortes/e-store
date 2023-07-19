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
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg mx-auto mb-5 hover:border-b-4 hover:border-solid hover:border-green-600  transition-colors duration-500'>
        <figure className="relative mb-2 w-full h-auto">
         
            
            <Link passHref href={`/products/${product.id}-${product.name}`}>
            <Image
            className='w-auto h-auto object-cover rounded-lg' 
            src={product.image} 
            alt={product.name} width={224} height={224} />
            </Link>

            
        </figure>
        <p className='flex justify-between px-4'>
            <span className='text-sm font-semibold capitalize'>{product.name}</span>
            <span className='text-lg font-medium'>€{product.price}</span>
        </p>
    </div>
  
   </>
  
  )
}

