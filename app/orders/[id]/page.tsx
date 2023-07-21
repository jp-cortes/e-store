'use client'
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { NavbarDashboard } from "../../../components"
import { getOrdersById } from "../../../services"
import Image from "next/image";
import Link from "next/link";

export default async function OrderDetail({ params: { id } } : { params: { id: string }}) {
   
    const order = await getOrdersById(id);
   


  return (
    <>
      <NavbarDashboard />
      <div className='relative grid justify-center overflow-y-auto'>
        
        <h2 className="text-2xl ml-8 my-7">Order Detail</h2>
        <div className='w-full h-auto'>
        {order.items.map((item) => (
          <div 
          className='bg-gray-200 flex flex-col justify-center border-2 rounded-lg mt-1 p-3'
          key={item.id}>
            <div className='flex justify-between content-center'>
              <figure>
                <Image src={item.image} width={60} height={60} alt={item.name} />
              </figure>
              <p className=''>{item.name}</p>
            </div>
            <div className='flex flex-col justify-between content-center'>
              <p className='font-medium'>
                Price per unit: <span className='capitalize font-normal'>€ {item.price}</span>
              </p>
              <p className='font-medium'>
                Quantity: <span className='capitalize font-normal'>{item.OrderProduct.amount}</span>
              </p>
            </div>
            <div className='flex  flex-col justify-between content-center'>
              <p className="font-medium">
                Current status:{" "}
                <span className="capitalize font-normal">{order.status}</span>
              </p>
              <p className="font-medium">
                Date:{" "}
                <span className="capitalize font-normal">
                  {order.createdAt.slice(0, 10)}
                </span>
              </p>
            </div>
          </div>
        ))}
        </div>
        <div className='flex justify-center flex-initial w-full mt-5'>
        <Link passHref href='/my-orders' className=''>
        <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>
            <h3>Back</h3>
        </div>
      </div>
    </>
  );
}
