'use client'
import { Navbar } from "../../components"
import Cookie  from 'js-cookie';
import { getOrdersByCustomer } from "../../services";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";


export default async function MyOrders() {
  const userId = Cookie.get('userId');
  const allMyOrders = await getOrdersByCustomer(`${userId}`);

  return (
   <>
   <Navbar/>
    <div className='grid place-content-center'>

      <div className='relative w-80'>
      <Link passHref href='/my-order' className='absolute right-0 top-1.5'>
          <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
          <h1 className='text-center text-2xl font-semibold mb-5'>My Orders</h1>
        {allMyOrders.map((order) => (
          <div key={order.id}
          className='border-2 rounded-lg mt-1 w-60 px-2'>
            <p className='font-medium'>Paid: <span className='capitalize font-normal'>{`${order.paid}`}</span></p>
            <p className='font-medium'>Current status: <span className='capitalize font-normal'>{order.status}</span></p>
            <p className='font-medium'>Date: <span className='capitalize font-normal'>{(order.createdAt).slice(0,10)}</span></p>
          </div>
        ))}
      </div>
    </div>
   </>
  )
}

