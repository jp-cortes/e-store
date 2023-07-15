'use client'

import { useShoppingCart, useShoppingCartMutations } from '../store/Cart';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { validateToken } from '../utils/cookies';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';


export function ShoppingCart() {
 //context
  const { items, subTotal } = useShoppingCart();
  const { removeFromShoppingCart, addToShoppingCart } = useShoppingCartMutations();

  //state
  const [quantity, setQuantity] = useState(1);
  // hook 
  const router = useRouter();
  
//add product to shoppingCart
  function  handleClick(product: Product) {
      addToShoppingCart(product, quantity);
      setQuantity(quantity);
    };

    //this function checks if the user already login

    function handleValidation() {
      const tokenFromCookies = validateToken( router, '/login', '/my-order');
      return tokenFromCookies;
    }
   


  return (
 
    <div className='w-[300px] md:w-[360px] lg:w-[360px] h-[100vh] flex-col fixed right-0 border border-black rounded-lg bg-white '>
        <div className='flex justify-between items-center p-6 border-b-2 mb-2'>
               <h3 className='font-semibold'>Cart</h3>
               <Dialog.Close asChild>
               <button>
            <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
            </button>
               </Dialog.Close>
        </div>
        {items.length ?
          <>
        <div className='w-full h-[60%] px-4 overflow-auto'>
        
        {items.map((item) => (
            <div className='' key={item.id}>
              <p className='mb-2'>{item.name}</p>
              <div className='flex justify-between mb-3'>
              <Image src={item.image} width={60} height={60} alt={item.name} />
              <p className='text-base'> € {(item.price * item.quantity).toFixed(2)}</p>
              </div>
              
              <div className='flex  px-4'>

              <p className='w-[250px] pl-3 border border-gray-500'>{`${item.quantity}`}</p>
              <button
              className='w-8 text-xl border border-gray-500'
              type='button'
              onClick={() => removeFromShoppingCart(item)}
              >
                -
              </button>
              <button
              className='w-8 text-xl border border-gray-500'
              type='button'               
                onClick={() => handleClick(item)}
                >
                +
              </button>
              </div>
            </div> 
          ))}
          
        </div>
          <div className='px-4 pb-3 h-1/3'>
          <div className='border-t-2 border-b-2 border-black mt-3 py-2'>
              <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>€ {(subTotal).toFixed(2)}</p>
              </div>
              <div className='flex justify-between'>
              <p>Taxes</p>
              <p>€ 0,00</p>
              </div>
              <div className='flex justify-between'>
              <p>Shipping</p>
              <p>Calculated at checkout</p>
              </div>
          
          </div>
          <div className='flex justify-between'>
              <p>Total</p>
              <p>€ {(subTotal).toFixed(2)}</p>
              </div>
        <button 
         onClick={handleValidation}
         className='flex justify-center w-52 px-4 py-2 rounded-xl bg-black text-white font-medium mx-auto my-6'>
          Proceed to Checkout
        </button>
        </div>
          </> :
           
           <div className='mx-auto flex justify-center items-center flex-col gap-8 pt-52'>
            <ShoppingBagIcon className='w-6 h-6'/>
            <span className='text-xl font-semibold'>Your Cart is empty</span>
            </div> 
         
          
          }
    </div>
  )
}


export function ShoppingCartModal() {

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className=" inline-flex items-center justify-center rounded-full bg-white">
          <ShoppingBagIcon className="w-6 h-6" />
        </button>
      </Dialog.Trigger>
      <Dialog.Overlay className="bg-background/80 data-[state=open] fixed top-0 inset-0 z-20" />
      <Dialog.Content className="data-[state=open] fixed top-0 right-0 w-auto translate-x-[-50%] translate-y-[-50%] rounded-[6px] duration-500 z-20">
        <ShoppingCart />
      </Dialog.Content>
    </Dialog.Root>
  
  );
  }
