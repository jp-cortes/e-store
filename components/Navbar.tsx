'use client'

import { ShoppingCartModal } from "./Cart";
import { MenuUserlogedIn } from "./MenuUser";
import { useShoppingCart } from "../store/Cart";
import { MenuMobile } from "./MenuMobile";
import Cookie  from 'js-cookie';
import Link from "next/link";




export function Navbar() {
  const token = Cookie.get('token');
  const { count: shoppingCartCount } = useShoppingCart();
 

  return (
    <header>
      <nav className='bg-lightGreen  flex justify-between items-center fixed z-10 top-0 w-full h-[68px] px-8 text-base'>
      <MenuMobile/>
      <ul className="gap-8 hidden md:flex items-center">
        <li className='font-bold text-2xl'>
          <Link href='/'>E-store</Link>
        </li>
        <li>
        <Link
          className=' hover:underline underline-offset-4'
          href='/categories'>Categories
          </Link>
        </li>
      </ul>
      
      <ul className='flex item-center gap-3 relative'>
        <li className="relative">
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
              <ShoppingCartModal/>
        </li>
        <li>
          { token ? <MenuUserlogedIn/> :
          <Link
          className='bg-green-700 rounded-lg p-2 text-white font-semibold hover:bg-green-400' 
          href='/login'>Login</Link>
          }
        </li>
      </ul>
      </nav>
    </header>
  )
}