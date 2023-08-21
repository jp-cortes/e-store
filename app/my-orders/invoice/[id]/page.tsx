'use client'
import { Suspense } from "react";
import { InvoiceDetails, Navbar } from "../../../../components"
import { getOrdersById } from "../../../../services"


export default async function OrderDetail({ params: { id } } : { params: { id: string }}) {
   
    const order = await getOrdersById(id) as OrderDetail;
   
    

  return (
    <>
      <Navbar />
      <Suspense>
          <InvoiceDetails order={order} goBackTo='/my-orders'/>
      </Suspense>
    </>
  );
}
