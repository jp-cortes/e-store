import Link from "next/link";
import { Cart } from "../Cart";


type Props = {}

export const Navbar = (props: Props) => {

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full px-8 text-base'>
      <ul className="flex items-center gap-8 ">
        <li className='font-bold text-2xl'>
          <Link href='/'>E-store</Link>
        </li>
        <li>
          <Link
          className=' hover:underline underline-offset-4'
          href='/'>All Products</Link>
        </li>
        <li>
          <Link
          className=' hover:underline underline-offset-4'
          href='/categories'>Categories</Link>
        </li>
      </ul>
      <ul className='flex item-center gap-3'>
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
        <li>
          <Cart/>
        </li>
      </ul>
      </nav>
  )
}