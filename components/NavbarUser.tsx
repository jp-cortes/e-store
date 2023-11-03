'use client'

import { ShoppingCartModal } from "./Cart";
import { MenuUserloggedIn } from "./MenuUser";
import { useShoppingCart } from "../store/Cart";
import { MenuMobile } from "./MenuMobile";
import Link from "next/link";




export function NavbarUser() {

  // context
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
        <MenuUserloggedIn/> 
        </li>
      </ul>
      </nav>
    </header>
  )
}