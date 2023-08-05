'use client'
import { NavbarDashboard, TableModifyOrders } from "../../../components"



export default async function Orders() {
  return (
    <>
    <NavbarDashboard />
    <div className='w-full text-center'>
      <h1 className='text-xl font-semibold'>Orders</h1>
      <div className='grid justify-center w-full mt-10'>
        <TableModifyOrders/>
      </div>
    </div>
    </>
  )
}