'use client'

import { useState } from "react";
import { useShoppingCartMutations } from "../../store/Cart";
import { PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

type Props = {
    product: Product;
    
  }


export function AddToCartButton({ product }: Props) {
    const [quantity, setQuantity] = useState(1);
    const { addToShoppingCart } = useShoppingCartMutations();
    
    
    

    function  handleClick(e) {
      e.stopPropagation();
        addToShoppingCart(product, quantity);
        setQuantity(quantity);
        console.log('added to cart' );
      };
      
 return (
    <>
   
    <button 
    onClick={(e) => handleClick(e)}
    className='flex justify-around w-52 p-4 rounded-xl bg-green-500 text-white font-medium'
    >
      ADD TO CART
    <ShoppingCartIcon className="w-6 h-6"/>
    </button>
    
            
    </>
  )
}

