'use client'
import Link from "next/link";
import { MenuDashboard } from "./";




export function NavbarDashboard() {

 

  return (
    <header>
      <nav className=' bg-lightGreen flex justify-between items-center fixed z-10 top-0 w-full h-[68px] px-8 text-base border-b border-borderGreen'>
      <ul className="flex items-center gap-8 ">
        <li className='font-bold text-2xl'>
          <Link href='/dashboard'>E-store</Link>
        </li>
      </ul>
      <ul className='flex item-center gap-3 relative'>
      
        <li>
          <MenuDashboard/>
        </li>
      </ul>
      </nav>
    </header>
  )
}