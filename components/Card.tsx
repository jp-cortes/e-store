

import Image from "next/image";
import Link from "next/link";

type Props = {
  product: Product;
  isDetailsPage: boolean;
}

export function Card({ product }:Props) {
  


  return (
   <div className='mx-auto mb-5 w-60 rounded-lg border-b-4 hover:border-b-4 hover:border-solid hover:border-green-600 transition-colors duration-500 cursor-pointer shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] bg-white'>
    <div className='w-56 h-60 '>
        <figure className="m-2 w-full h-auto">
         
            
            <Link passHref href={`/products/${product.id}-${product.name}`}>
            <Image
            loading='lazy'
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
  
   </div>
  
  )
}

