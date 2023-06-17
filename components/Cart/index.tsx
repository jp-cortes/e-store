'use client'

import { XMarkIcon } from '@heroicons/react/24/solid';
import { Dispatch, SetStateAction, useState } from 'react';
import { useShoppingCart, useShoppingCartMutations } from '../../store/Cart';
import Link from 'next/link';
import Image from 'next/image';


type Props = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>
}

export function ShoppingCart({ showMenu, setShowMenu }: Props) {
  const { items, subTotal } = useShoppingCart();
  const { removeFromShoppingCart, addToShoppingCart } = useShoppingCartMutations();

  const [quantity, setQuantity] = useState(1);
  
  
  
  function validate(quantity: number) {
      let error = "";
      if (quantity < 1) error = "Can't be blank";
  
      return error;
    };

  function  handleClick(product: Product) {
      addToShoppingCart(product, quantity);
      setQuantity(quantity);
      console.log('added to cart' );
    };

    function handleChange ({ target }: React.ChangeEvent<HTMLInputElement>) {
      setQuantity(parseInt(target.value, 10));
    }
console.log(items)

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
        <div className='w-full'>
        ShoppingCart
        {items.map((item) => (
            <div className=' flex ' key={item.id}>
              <Image src={item.image} width="50" height="50" alt={item.name} />
              <button
                className=''
                onClick={() => handleClick(item)}
                >
                +
              </button>
              <input 
              onChange={handleChange}
              type='number'
              defaultValue={`${item.quantity}`}
              min={1}
              />
              <button
              type='button'
                className=''
                onClick={() => removeFromShoppingCart(item)}
                >
                ❌
              </button>
              {/* <p> Price: € {(item.price * item.quantity).toFixed(2)}</p> */}
            </div> 
          ))}
          
          {items.length === 0 ? 
          <div className=''><span>Your Cart is currently empty</span></div> : 
          
        <Link 
         href='/my-order'
         className='flex justify-center w-52 p-4 rounded-xl bg-black text-white font-medium'>
          CHECKOUT
        </Link>
         
          
          }
        </div>
    </div>
  )
}

