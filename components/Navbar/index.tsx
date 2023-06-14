'use client'
import { useShoppingCart } from "../../store/Cart";
import Link from "next/link";
import { ShoppingBagIcon } from '@heroicons/react/24/outline'


type Props = {}

export function Navbar(props: Props) {
  const { count: shoppingCartCount }= useShoppingCart();

  return (
    <nav className=' bg-white flex justify-between items-center fixed z-10 top-0 w-full h-[68px] px-8 text-base'>
      <ul className="flex items-center gap-8 ">
        <li className='hidden md:block font-bold text-2xl'>
          <Link href='/'>E-store</Link>
        </li>
        <li>
          <Link
          className=' hover:underline underline-offset-4'
          href='/categories'>All</Link>
        </li>
      </ul>
      <ul className='hidden md:flex item-center gap-3 relative'>
        <li>
          <Link
          className='hover:underline underline-offset-4' 
          href='/my-orders'>My Orders</Link>
        </li>
        <li>
          <Link
          className='hover:underline underline-offset-4' 
          href='/my-account'>My Account</Link>
        </li>
        <li>
          <Link
          className='hover:underline underline-offset-4' 
          href='/login'>Sign in</Link>
        </li>
        <li className="relative">
             <button
             onClick={() => {}}
              className="m-0"           
               >
                <ShoppingBagIcon  className="w-6 h-6"/>
              </button>
              {
              shoppingCartCount > 0 && 
              <div className="absolute top-0 right-[-8px] bg-green-800 font-semibold text-white w-5 h-5 rounded-full p-0 flex justify-center items-center">
                {
                shoppingCartCount > 9 ? 
                <div className="absolute text-white right-[-2px]">9+</div> : 
                shoppingCartCount 
                }
              </div>
              }
        </li>
      </ul>
      </nav>
  )
}