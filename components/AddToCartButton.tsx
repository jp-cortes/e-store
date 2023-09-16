'use client'

import { useEffect, useRef, useState } from "react";
import { useShoppingCartMutations } from "../store/Cart";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import * as Toast from '@radix-ui/react-toast';


type Props = {
    product: Product;
    
  }


export function AddToCartButton({ product }: Props) {
  // context
  const { addToShoppingCart } = useShoppingCartMutations();
  const [quantity, setQuantity] = useState(1);

    // this handle the time of the toast
    const [open, setOpen] = useState(false);
    const timerRef = useRef(0);

    useEffect(() => {
      return () => clearTimeout(timerRef.current);
    }, []);

    
    

    function  handleClick() {
     
        addToShoppingCart(product, quantity);
        setQuantity(quantity);

        setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        
      };
      
 return (
    <>
   <Toast.Provider swipeDirection="right">
    <button 
    type='button'
    onClick={() => handleClick()}
    className='flex justify-around w-52 p-4 rounded-xl bg-buttonGreen text-white hover:bg-hoverGreen font-medium'
    >
      ADD TO CART
    <ShoppingCartIcon className="w-6 h-6"/>
    </button>
    
      
    <Toast.Root
        className="bg-yellow-100 rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
          {product.name}{" "}added to Cart
        </Toast.Title>
        <Toast.Description asChild>
          <p
            className="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]">
            Check Cart to <b>undo</b>
          </p>
        </Toast.Description>
        <Toast.Action className="[grid-area:_action]" asChild altText="close dialog">
          <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px]  text-green-500 shadow-[inset_0_0_0_1px] shadow-green-700 hover:bg-green-500 hover:text-white">
            ok
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-40 outline-none" />
    </Toast.Provider>      
    </>
  )
}

