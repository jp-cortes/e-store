"use client";
import { Suspense } from "react";
import { Invoice, NavbarUser } from "../../../../components";
import { getOrdersById } from "../../../../services";

export const runtime = 'edge';

export default async function InvoiceDetails({ params: { id } } : { params: { id: string }}) {

    const order = await getOrdersById(id) as OrderDetail;
// console.log(order, 'invoice')

  return (
    <>
      <NavbarUser/>
      <Suspense>
        <Invoice order={order}/>
      </Suspense>
    </>
  );
}
