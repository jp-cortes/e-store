'use client'

import { useState } from "react";
import { useShoppingCartMutations } from "../../store/Cart";
import { PlusIcon } from '@heroicons/react/24/outline'

type Props = {
    product: Product;
  }


export function AddToCartButton({ product }: Props) {
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

      };
      
 return (
    <>
    <button
            onClick={handleClick}
            className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 pb-0'>
              <PlusIcon className="w-6 h-6"/>
            </button>
            
    </>
  )
}

