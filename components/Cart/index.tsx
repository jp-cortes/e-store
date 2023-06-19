'use client'
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction, useState } from 'react';
import { useShoppingCart, useShoppingCartMutations } from '../../store/Cart';
import Image from 'next/image';


type Props = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>
}

export function ShoppingCart({ showMenu, setShowMenu }: Props) {
 //context
  const { items, subTotal } = useShoppingCart();
  const { removeFromShoppingCart, addToShoppingCart } = useShoppingCartMutations();

  //state
  const [quantity, setQuantity] = useState(1);
  
  
//add product to shoppingCart
  function  handleClick(product: Product) {
      addToShoppingCart(product, quantity);
      setQuantity(quantity);
    };


  return (
    <div className={`${showMenu ? 'flex' : 'hidden' } w-[360px] h-[calc(100vh-68px)] top-[68px] flex-col fixed right-0 border border-black rounded-lg bg-white z-30 transition-all`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Shopping Cart</h2>
            <button
            onClick={() => setShowMenu((prevState) => !prevState)}
            >
            <XMarkIcon className='h-6 w-6 text-black'></XMarkIcon>
            </button>
        </div>
        {items.length ?
          <>
        <div className='w-full h-2/3 px-4 overflow-auto'>
        
        {items.map((item) => (
            <div className='' key={item.id}>
              <p className='mb-2'>{item.name}</p>
              <div className='flex justify-between mb-3'>
              <Image src={item.image} width="50" height="50" alt={item.name} />
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
          <div className='px-4'>

          

          
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
         onClick={() => console.log('payment')}
         className='flex justify-center w-52 px-4 py-2 rounded-xl bg-black text-white font-medium mx-auto my-6'>
          Pay with Stripe
        </button>
        </div>
          </> :
           
           <div className='mx-auto flex justify-center items-center flex-col'>
            <ShoppingBagIcon className='w-6 h-6'/>
            <span className='text-xl font-semibold'>Your Cart is currently empty</span>
            </div> 
         
          
          }
    </div>
  )
}

