
'use client'
import { DefaultAvatar, NavbarDashboard } from "../../../../components"
import { getOrdersById } from "../../../../services";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";



export default async function SingleOrder({ params: { id } } : { params: { id: string }}) {
  const order = await getOrdersById(id);

  // id: number;
  // status: string;
  // paid: boolean;
  // createdAt: string;
  // customerId: number;
  // customer: Customer;
  // items: ProductOrder[]

  return (
    <>
    <NavbarDashboard/>
    <div className='grid'>
    <h1 className='text-2xl ml-8 my-7 justify-self-center font-semibold'>Order Details</h1>
    <div className='flex flex-col justify-center content-center md:flex-row lg:flex-row lg:gap-8'>
      <div className='flex flex-col justify-center content-center'>
        <p className="font-medium capitalize">Order #:{" "}<span className='font-normal'>{order.id}</span></p>
        <p className="font-medium">
                  Current status:{" "}
                  <span className="capitalize font-normal">{order.status}</span>
                </p>
        <p className="font-medium capitalize">
                  Date:{" "}
                  <span className="capitalize font-normal">
                    {order.createdAt.slice(0, 10)}
                  </span>
                </p>
       
        {order.customer.avatar ? (
                      <figure className='my-3'>
                        <Image
                        width={60}
                        height={60}
                        className="object-contain w-auto h-auto rounded-full"
                        src={order?.customer?.avatar}
                        alt="avatar"
                      />
                      </figure>
                    ) : (
                      <DefaultAvatar userName={order?.customer?.name} bgColor='bg-red-400'/>
                    )}
                    <p className='font-medium'>useremail:</p>
                    <p className='font-normal'>email</p>
                    <p className='font-medium'>User full name:</p>
                    <p className="font-normal capitalize">{order.customer.name}{" "}{order.customer.lastName}</p>
      </div>
      <div className='flex flex-col justify-center content-center border-2 rounded-lg mt-1 p-3 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]'>
        <h4>Purchase:</h4> <br/>
        {order.items.map((item) => (
          <>
          <div key={item.id}>
          <figure className="mr-2">
                  <Image
                    src={item.image}
                    width={60}
                    height={60}
                    alt={item.name}
                  />
                </figure>
                <p className="font-medium capitalize">{item.name}</p>
              </div>
              <div className="flex flex-col justify-between content-center">
                <p className="font-medium">
                  Price{" "}
                  <span className="capitalize font-normal">€ {item.price}</span>
                </p>
                <p className="font-medium">
                  Quantity:{" "}
                  <span className="capitalize font-normal">
                    {item.OrderProduct.amount}
                  </span>
                </p>
              </div>
            </>
        ))}
      </div>
    </div>
    <div className="flex justify-center flex-initial w-full mt-5">
          <Link passHref href="/dashboard/orders" className="">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
          <h3>Back</h3>
    </div>
    </div>
    </>
  )
}
