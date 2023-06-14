'use client'


import Image from "next/image";
import { AddToCartButton } from "./AddToCartButton";
import { useProductDetail } from "../../store/Cart";

type Props = {
  product: Product;
}

export function Card({ product }:Props) {
  const { productDetails } = useProductDetail();
  const { openProductdetail, setProductToShow } = productDetails;
  
  function showProduct(productDetail: Product) {
   openProductdetail();
  //  setProductToShow(productDetail)
  }

  return (
   
    <div 
    className={`bg-white cursor-pointer w-56 h-60 rounded-lg mx-auto`}
    onClick={() => showProduct()}>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{product.category.name}</span>
            <Image className='w-full h-full object-cover rounded-lg' 
            src={product.image} 
            alt={product.name} width={224} height={224} />
            <AddToCartButton product={product}/>
        </figure>
        <p className='flex justify-between px-4'>
            <span className='text-sm font-semibold capitalize'>{product.name}</span>
            <span className='text-lg font-medium'>${product.price}</span>
        </p>
    </div>
  
  )
}

