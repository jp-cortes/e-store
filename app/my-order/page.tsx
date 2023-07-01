'use client'

import { useShoppingCart, useShoppingCartMutations } from '../../store/Cart';
import { getStripe } from '../../store/getStripe';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Navbar } from '../../components/Navbar';




export default  function MyOrder() {
  // context 
    const { items, subTotal } = useShoppingCart();
    const { removeFromShoppingCart, addToShoppingCart } = useShoppingCartMutations();
//state
    const [quantity, setQuantity] = useState(1);
    
 //hook
 const router = useRouter();   

  //add product to shoppingCart
    function  handleClick(product: Product) {
        addToShoppingCart(product, quantity);
        setQuantity(quantity);
      };

    async function handleCheckout() {
      
      const stripe =  await getStripe();
  
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers : {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(items),
      });
  
      if(response.status === 500) return;
  console.log(response)
    //   const data = await response.json();
     
      
    
    //  const { error } = await stripe.redirectToCheckout({ sessionId: data.id });
    //  console.warn(error);
    }

    
    // /orders/add-item //endpoint
    // {
    //     "orderId": 1,
    //     "productId": 3,
    //     "amount": 5
    //   }
    
    if(items.length === 0) return router.push('/categories');

  return (
    <>
        <Navbar />
    <div className='mx-auto'>
      <div className='w-full flex-1 px-4 overflow-auto relative'>
      <Link href='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1 className='text-center mb-8 font-semibold'>My Order</h1>
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
          </div>
          <div className='flex justify-between'>
              <p>Total</p>
              <p>€ {(subTotal).toFixed(2)}</p>
              </div>
        <button 
         onClick={handleCheckout}
         className='flex justify-center w-52 px-4 py-2 rounded-xl bg-black text-white font-medium mx-auto my-6'>
          Pay with Stripe
        </button>
        </div>
    </div>
    </>
  )
}

