'use client'
import { Suspense } from "react";
import { NavbarDashboard, TableModifyOrders } from "../../../components"
import { getOrders } from "../../../services";
import { CardOrders } from "../../../components/Dahsboard";



export default async function Orders() {

  
  const orders: OrderDetail[] = await getOrders();

  return (
    <>
    <NavbarDashboard />
    <div className='grid justify-center w-full text-center'>
      <h1 className='text-xl font-semibold'>Orders</h1>
      <div className='overflow-x-auto border-b border-gray-500 sm:rounded-lg mt-10 w-full'>
        <Suspense>
        <TableModifyOrders orders={orders}/>
        </Suspense>
      </div>
      <Suspense>
        <CardOrders orders={orders}/>
      </Suspense>
    </div>
    </>
  )
}