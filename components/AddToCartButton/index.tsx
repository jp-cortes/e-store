'use client'

import { useState } from "react";
import { useShoppingCartMutations } from "../../store/Cart";
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

type Props = {
    product: Product;
    
  }


export function AddToCartButton({ product }: Props) {
    const [quantity, setQuantity] = useState(1);
    const { addToShoppingCart } = useShoppingCartMutations();
    
    
    

    function  handleClick() {
     
        addToShoppingCart(product, quantity);
        setQuantity(quantity);
        console.log('added to cart' );
      };
      
 return (
    <>
   
    <button 
    type='button'
    onClick={() => handleClick()}
    className='flex justify-around w-52 p-4 rounded-xl bg-green-700 text-white font-medium'
    >
      ADD TO CART
    <ShoppingCartIcon className="w-6 h-6"/>
    </button>
    
            
    </>
  )
}

