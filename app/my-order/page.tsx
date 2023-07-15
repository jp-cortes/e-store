'use client'

import { useShoppingCart, useShoppingCartMutations } from '../../store/Cart';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Navbar } from '../../components';
import {  
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { createOrder } from '../../services';
import { getStripe } from '../../store/getStripe';
import Link from 'next/link'; 
import Image from 'next/image';




export default  function MyOrder() {
  // context 
    const { items, subTotal } = useShoppingCart();
    const { 
       removeFromShoppingCart,
       addToShoppingCart,
       clearShoppingCart } = useShoppingCartMutations();

       //state
    const [quantity, setQuantity] = useState(1);
    
 //hook
 const router = useRouter();   

  //add product to shoppingCart
    function  addItemInShoppingCart(product: Product) {
        addToShoppingCart(product, quantity);
        setQuantity(quantity);
      };

    async function handleCheckoutStripe() {

      const stripe =  await getStripe();
  
      const response = await fetch('/api/stripe', {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        cache: 'no-cache',
        body: JSON.stringify(items),
      });
  
      if(response.status === 500) return;
 
      const data = await response.json();
     if(data.session){
      await stripe?.redirectToCheckout({ sessionId: data.session.id });

     }
      
    
    
    }

    
    // /orders/add-item //endpoint
    // {
    //     "orderId": 1,
    //     "productId": 3,
    //     "amount": 5
    //   }
    
      //paypal
  // This values are the props in the UI
const amount = `${subTotal}`;
const currency = "EUR";
const style = {"layout":"vertical"};

async function createOrderPayPal(orderData: { paid: boolean, status: string}) {
  try {
    // await createOrder(orderData);
      console.log(orderData)
      router.push(`/my-orders`);
    
  } catch (error) {
    console.log(error);
  }

}
    
    function ButtonWrapper({ currency, showSpinner }: PaypalButton) {
      // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
      const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    
      useEffect(() => {
          dispatch({
              type: "resetOptions",
              value: {
                  ...options,
                  currency: currency,
              },
          });
      }, [currency, showSpinner]);
    
    
      return (<>
              { (showSpinner && isPending) && <div className="spinner" /> }
              <PayPalButtons
                  style={{ layout: "vertical" }}
                  disabled={false}
                  forceReRender={[amount, currency, style]}
                  fundingSource={undefined}
                  createOrder={async (data, actions) => {
                      const orderId = await actions.order
                      .create({
                        purchase_units: [
                          {
                            amount: {
                              currency_code: currency,
                              value: amount,
                            },
                          },
                        ],
                      });
                    return orderId;
                  }}
                  onApprove={async function ():Promise<void> {
                     await createOrderPayPal({ paid: true, status: 'on the way'});
                          //  clearShoppingCart();
                  }}
              />
          </>
      );
    }



  return (
    <>
        <Navbar />
    <div className='mx-auto z-0'>
      <div className='w-full flex-1 px-4 overflow-auto relative'>
      <Link href='/my-orders' passHref className='absolute left-0'>
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
              
              <div className='flex justify-between px-4'>
                <p className=''>Quantity:</p>
              <p className='font-semibold'>{`${item.quantity}`}</p>
              {/* <button
              className='w-8 text-xl border border-gray-500'
              type='button'
              onClick={() => removeFromShoppingCart(item)}
              >
                -
              </button>
              <button
              className='w-8 text-xl border border-gray-500'
              type='button'               
                onClick={() => addItemInShoppingCart(item)}
                >
                +
              </button> */}
              </div>
            </div> 
          ))}
          
        </div>
        {items.length === 0 ? <h3 className='text-center mt-10'>You have no Orders</h3> :
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
        <div className='flex flex-col justify-between items-center z-0'>
        <button 
         onClick={handleCheckoutStripe}
         className='flex justify-center w-52 px-4 py-2 rounded-xl bg-black text-white font-medium mx-auto my-6'>
          Pay with Stripe
        </button>
        <div className='w-full flex items-center justify-center my-6'>
        <div className='h-[2px] w-6 bg-black'/>
         <p className='mx-5 text-xl'>or</p>
         <div className='h-[2px] w-6 bg-black'/>
        </div>
        <PayPalScriptProvider
                options={{
                    'clientId': `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`,
                    components: "buttons",
                    currency: "EUR",
                    "disable-funding": "credit,card,p24",
                  }}
                  >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>

        </div>
        </div>}
    </div>
    </>
  )
}

