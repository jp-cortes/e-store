'use client'
import { Suspense } from "react";
import { NavbarDashboard, TableModifyOrders } from "../../../components"
import { CardOrders } from "../../../components/Dahsboard";

export const runtime = 'edge';

export default function Orders() {
 

  return (
    <>
    <NavbarDashboard />
    <div className='grid justify-center w-full text-center mt-2'>
      <h1 className='text-xl font-semibold'>Orders</h1>
      <div className='overflow-x-auto border-b border-gray-500 sm:rounded-lg mt-10 w-full'>
        <Suspense>
        <TableModifyOrders />
        </Suspense>
      </div>
      <Suspense>
        <CardOrders />
      </Suspense>
    </div>
    </>
  )
}