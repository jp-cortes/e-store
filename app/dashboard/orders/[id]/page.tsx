
'use client'
import { NavbarDashboard } from "../../../../components"
import { getOrdersById } from "../../../../services";
import { InvoiceDetails } from "../../../../components";
import { Suspense } from "react";



export default async function SingleOrder({ params: { id } } : { params: { id: string }}) {
  const order = await getOrdersById(id) as OrderDetail;

console.log(order, 'order id')
  return (
    <>
    <NavbarDashboard/>
    <Suspense>
    <InvoiceDetails order={order} goBackTo='/dashboard/orders'/>

    </Suspense>
    </>
  )
}
