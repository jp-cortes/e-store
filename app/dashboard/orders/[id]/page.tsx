
'use client'
import { NavbarDashboard } from "../../../../components"
import { getOrdersById } from "../../../../services";
import { OrderDetails } from "../../../../components";
import { Suspense } from "react";

export const runtime = 'edge';

export default async function SingleOrder({ params: { id } } : { params: { id: string }}) {
  const order = await getOrdersById(id) as OrderDetail;

console.log(order, 'order id')
  return (
    <>
    <NavbarDashboard/>
    <Suspense>
    <OrderDetails order={order} goBackTo='/dashboard/orders'/>

    </Suspense>
    </>
  )
}
