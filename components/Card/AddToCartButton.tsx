'use client'

import { useState } from "react";
import { useShoppingCartMutations } from "../../store/Cart";
import { PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

type Props = {
    product: Product;
    isDetailsPage: boolean;
  }


export function AddToCartButton({ product, isDetailsPage }: Props) {
    const [quantity, setQuantity] = useState(1);
    const { addToShoppingCart } = useShoppingCartMutations();
    
    
    function validate(quantity: number) {
        let error = "";
        if (quantity < 1) error = "Can't be blank";
    
        return error;
      };

    function  handleClick() {
        addToShoppingCart(product, quantity);
        setQuantity(quantity);
        console.log('added to cart' );
      };
      
 return (
    <>
    {!isDetailsPage ? <button
            onClick={handleClick}
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 pb-0'>
              <PlusIcon className="w-6 h-6"/>
    </button> :
    <button 
    onClick={handleClick}
    className='flex justify-around w-52 p-4 rounded-xl bg-green-500 text-white font-medium'
    >
      ADD TO CART
    <ShoppingCartIcon className="w-6 h-6"/>
    </button>
    }
            
    </>
  )
}

