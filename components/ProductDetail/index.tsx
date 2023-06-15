'use client'

import { XMarkIcon } from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction, useContext } from 'react';
import { ProductDetailContext } from '../../store/Cart';


type Props = {
  setOpenProductDetail: Dispatch<SetStateAction<boolean>>
}

export function ProductDetail() {
  const { 
    closeProductdetail,
     productToShow,
     productDetail,
    }= useContext(ProductDetailContext);


    function hideProduct() {
    closeProductdetail();
    console.log(productToShow);
    }

  return (
    <aside className={`${ productDetail ? 'flex': 'hidden'} flex-col w-[360px] h-[calc(100vh-68px)] top-[68px] fixed right-0 border border-black rounded-lg bg-white z-30`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div
            onClick={() => hideProduct()}>
            <XMarkIcon className='h-6 w-6 text-black'/>
            </div>
        </div>
        ProductDetail

    </aside>
  )
}
