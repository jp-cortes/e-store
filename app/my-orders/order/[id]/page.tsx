'use client'
import { Suspense } from "react";
import { OrderDetails, NavbarUser } from "../../../../components"
import { getOrdersById } from "../../../../services"


export default async function OrderDetail({ params: { id } } : { params: { id: string }}) {
   
    const order = await getOrdersById(id) as OrderDetail;
   
    

  return (
    <>
      <NavbarUser />
      <Suspense>
          <OrderDetails order={order} goBackTo='/my-orders'/>
      </Suspense>
    </>
  );
}
