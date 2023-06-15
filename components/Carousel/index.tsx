'use client'

import { getProductsByCategoryName } from '../../services';
import { AddToCartButton } from '../Card/AddToCartButton';
import { useContext } from 'react';
import { ProductDetailContext } from '../../store/Cart';
import Image from 'next/image';
import { ProductDetail } from '../ProductDetail';

export async function Carousel() {
  const { openProductdetail, setProductToShow } = useContext(ProductDetailContext);

  function showProduct(productDetail: Product) {
    console.log(productDetail);
    console.log('click');
    setProductToShow(productDetail);
    openProductdetail();

  }
 
  const products = await getProductsByCategoryName('home');

  if (!products?.length) return null;

  return (
    <>
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-[marquee_60s_linear_infinite]">
        {[...products].map((product) => (
     
          <div
            key={product.id}
            className="relative h-[30vh] w-full flex-none md:w-1/3">
              <Image
              onClick={() => showProduct(product)}
              alt={product.name}
              className="h-full object-contain"
              fill
              sizes="33vw"
              src={product.image}
              />
              <div className='absolute top-0 right-[80px]'>
              <AddToCartButton product={product}/>
            </div>
              <span className='absolute bottom-[20px] left-[80px] bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 capitalize'>{product.category.name}</span>
      
             
            <div className="absolute bottom-4 right-0 flex items-center justify-center flex-col">
              <div className="inline-flex bg-white p-4 text-lg font-semibold text-black rounded-xl">
                {product.name}
              </div>
              <div className="inline-flex bg-white px-2 text-lg mt-2 font-semibold text-black rounded-lg">
                ${product.price}
              </div>
            </div>
          </div>
        
        ))}
      </div>
    </div>
    <ProductDetail/>
    </>
  );
}