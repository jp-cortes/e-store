'use client'
import { useContext } from "react";
import { ShoppingCartContext } from "../../store/Cart";
import Link from "next/link";
import Image from "next/image";


type Props = {}

export function Navbar(props: Props) {
  const { count }= useContext(ShoppingCartContext);

  return (
    <nav className=' bg-white flex justify-between items-center fixed z-10 top-0 w-full px-8 text-base'>
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
              className="m-0"           
               >
                <Image src='' width={28} height={28} alt='shopping-bag'/>
              </button>
              <div className="absolute top-2 right-[-8px] bg-green-800 font-semibold text-white w-4 h-4 rounded-full p-0 flex justify-center items-center">
                {count}
              </div>
        </li>
      </ul>
      </nav>
  )
}