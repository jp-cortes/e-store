'use client'

import { useShoppingCart } from '../../store/Cart';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Navbar } from '../../components';
import { ButtonStripe } from '../../components';
import { ButtonPayPal } from '../../components';
import Link from 'next/link'; 
import Image from 'next/image';



export default  function MyOrder() {
  // context 
    const { items, subTotal } = useShoppingCart();

   
    

  
  return (
    <>
      <Navbar />
      <div className="mx-auto z-0">
        <div className="w-full flex-1 px-4 overflow-auto relative">
          <Link href="/my-orders" passHref className="absolute left-0">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
          <h1 className="text-center mb-8 font-semibold">My Order</h1>

          {items.map((item) => (
            <div className="" key={item.id}>
              <p className="mb-2">{item.name}</p>
              <div className="flex justify-between mb-3">
                <Image
                  src={item.image}
                  width="50"
                  height="50"
                  alt={item.name}
                />
                <p className="text-base">
                  {" "}
                  € {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              <div className="flex justify-between px-4">
                <p className="">Quantity:</p>
                <p className="font-semibold">{`${item.quantity}`}</p>
              </div>
            </div>
          ))}
        </div>
        {items.length === 0 ? (
          <h3 className="text-center mt-10">You have no Orders</h3>
        ) : (
          <div className="px-4">
            <div className="border-t-2 border-b-2 border-black mt-3 py-2">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>€ {subTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p>Total</p>
              <p>€ {subTotal.toFixed(2)}</p>
            </div>
            <div className="flex flex-col justify-between items-center z-0">
              <ButtonStripe items={items}/>
              <div className="w-full flex items-center justify-center my-6">
                <div className="h-[2px] w-6 bg-black" />
                <p className="mx-5 text-xl">or</p>
                <div className="h-[2px] w-6 bg-black" />
              </div>
            <ButtonPayPal items={items} subTotal={subTotal} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

