'use client'
import { Navbar } from "../../components"
import { getOrdersByCustomer } from "../../services";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


export default async function MyOrders() {

  const allMyOrders:ResumeOrder[] = await getOrdersByCustomer();

  return (
   <>
   <Navbar/>
    <div className='grid text-center justify-center w-auto'>

      <div className='lg:w-[800px]'>
      <div className='relative'>
      <Link passHref href='/my-order' className='absolute right-[20px] md:right-[30%] lg:right-[30%] top-1.5'>
          <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
          <h1 className=' text-2xl font-semibold mb-5'>My Orders</h1>
      </div>
        <div className='lg:w-[800px] flex flex-wrap h-auto overflow-y-auto mb-6'>
        {allMyOrders?.map((order) => (
          <div 
          key={order.id}
          className='border-2 rounded-lg mt-2 w-60 px-2 mx-auto max-h-max'>
            <p className='font-medium'>Paid: <span className='capitalize font-normal'>{`${order.paid}`}</span></p>
            <p className='font-medium'>Current status: <span className='capitalize font-normal'>{order.status}</span></p>
            <Link href={`/orders/${order.id}`} passHref><span className='capitalize font-medium text-blue-400 hover:text-red-400 hover:underline'>details</span></Link>
            <p className='font-medium'>Date: <span className='capitalize font-normal'>{(order.createdAt).slice(0,10)}</span></p>
          </div>
        ))}
        </div>
      </div>
    </div>
   </>
  )
}

