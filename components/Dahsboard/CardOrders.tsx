'use client'
import Image from "next/image"
import Link from "next/link";
import { DefaultAvatar } from "../DefaultAvatar"
import { getOrders } from "../../services";
import { useFetch } from "../../hooks/pagination";

type Props = {
    orders: OrderDetail[] | undefined;
}

async function fetchOrders(page: number) {
  const orders = await getOrders();
  return orders?.slice((page - 1) * 9, page * 9)
}

export function CardOrders() {

  const { data, isLoading, ref } = useFetch({ query: ['all_orders'], queryFunction: fetchOrders })
  const  orders = data?.pages.flatMap((order) => order);

  return (
 <div className='lg:hidden flex flex-wrap justify-around'>
 {orders?.map((order, i) => (
       <div  key={order.id} className='w-[300px] p-3 flex flex-col gap-2 mt-4 rounded-lg border-1 border-solid border-borderGreen bg-ordersGreen'>
       <div className="flex justify-between content-center">
           <p className="text-xs font-medium text-lightGreen uppercase">
               Invoice:
           </p>
           <p className="text-sm font-medium text-lightGreen">
              # {" "} {order.id}
           </p>
       </div>
       <div className="flex justify-between content-center">
           <p className="text-xs font-medium text-lightGreen uppercase">
               Date:
           </p>
           <p className="text-sm font-medium text-lightGreen">
           {order.createdAt.slice(0, 10)}
           </p>
       </div>
       <div className="flex justify-between content-center">
           <p className="text-xs font-medium text-lightGreen uppercase">
           Status: 
           </p>
           <p className="text-sm text-lightGreen">
           {order.status}
           </p>
       </div>
       <div className="flex justify-between content-center">
           <p className="text-xs font-medium text-lightGreen uppercase">
           Paid: 
           </p>
           <p className="text-sm text-lightGreen">
           {`${order.paid}`}
           </p>
       </div>
       <div className='h-[2px] w-full bg-lightGreen'/>
       <div className="h-auto w-auto mx-auto mb-4">
       {order.customer.avatar ? (
                         <Image
                           width={32}
                           height={32}
                           className="rounded-full my-5"
                           src={order?.customer?.avatar}
                           alt="avatar"
                         />
                       ) : (
                         <DefaultAvatar userName={order?.customer?.name} bgColor='bg-red-400'/>
                       )}
       </div>
       <div className="flex justify-between content-center">
         <p className='text-xs font-medium text-lightGreen uppercase'>
             Customer name:
         </p>
           <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-lightGreen text-ordersGreen capitalize">
               {order.customer.name}
           </span>
       </div>
       <div className="flex justify-between content-center">
         <p className='text-xs font-medium text-lightGreen uppercase'>
             Customer lastname:
         </p>
           <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-lightGreen text-ordersGreen capitalize">
               {order.customer.lastName}
           </span>
       </div>
       <div className="flex gap-[5px]">
                <Link href={`/dashboard/orders/${order.id}`} className="text-lightGreen hover:buttonGreen m-0 text-[15px] font-medium leading-[1.5]">Full details...</Link>
      </div>
      {i === orders.length - 1 && <div ref={ref} />}
   </div>
 ))}
 </div>
  )
}

