'use client'


import { useContext } from "react";
import { AddToCartButton } from "./AddToCartButton";
import { ProductDetailContext } from "../../store/Cart";
import Image from "next/image";

type Props = {
  product: Product;
}

export function Card({ product }:Props) {
  
  const { openProductdetail, setProductToShow } = useContext(ProductDetailContext);

  function showProduct(productDetail: Product) {
    console.log(productDetail);
    setProductToShow(productDetail);
    openProductdetail();

  }

  return (
   <>
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg mx-auto'>
        <figure className="relative mb-2 w-full h-4/5">
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{product.category.name}</span>
            <Image
            onClick={() => showProduct(product)}
            className='w-full h-full object-cover rounded-lg' 
            src={product.image} 
            alt={product.name} width={224} height={224} />
            <AddToCartButton product={product}/>
        </figure>
        <p className='flex justify-between px-4'>
            <span className='text-sm font-semibold capitalize'>{product.name}</span>
            <span className='text-lg font-medium'>${product.price}</span>
        </p>
    </div>
  
   </>
  
  )
}

