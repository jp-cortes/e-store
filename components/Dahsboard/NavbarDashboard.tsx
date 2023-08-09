'use client'
import Link from "next/link";
import Cookie  from 'js-cookie';
import { MenuDashboard } from "./";




export function NavbarDashboard() {
  const token = Cookie.get('token');

 

  return (
    <header>
      <nav className=' bg-white flex justify-between items-center fixed z-10 top-0 w-full h-[68px] px-8 text-base'>
      <ul className="flex items-center gap-8 ">
        <li className='font-bold text-2xl'>
          <Link href='/dashboard'>E-store</Link>
        </li>
      </ul>
      <ul className='flex item-center gap-3 relative'>
      
        <li>
          { token ? <MenuDashboard/> :
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