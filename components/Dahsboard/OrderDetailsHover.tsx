'use client'
import * as HoverCard from '@radix-ui/react-hover-card';
import Link from 'next/link';
import Image from 'next/image';
import { DefaultAvatar } from '../';



export function OrderDetailsHover({ order }: { order: Partial<OrderDetail> }) {
  return (
    <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <button
        className="font-semibold text-indigo-500 transition-colors duration-200 hover:text-blue-400 focus:outline-none"
      >
        Details
      </button>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      >
        <div className="flex flex-col gap-[7px]">
          {order?.customer?.avatar ? (
          <figure>
            <Image
          width={60}
          height={60}
            className="block h-auto w-auto rounded-full"
            src={order?.customer.avatar}
            alt={order?.customer.name}
          />
          </figure>
          ):
          (<DefaultAvatar userName={order?.customer?.name} bgColor='bg-red-400'/>)
          }
          <div className="flex flex-col gap-[15px]">
            <div>
              <div className="text-black m-0 text-[15px] font-medium leading-[1.5] capitalize">{order?.customer?.name}</div>
              <div className="text-black m-0 text-[15px] leading-[1.5]"><b>Date:</b>{" "}{order?.createdAt?.slice(0, 10)}</div>
            </div>
            <div className="flex flex-col justify-center content-center m-0 gap-2">
              <h3 className='font-medium mt-2'>Products:</h3>
              {order?.items?.map((item) => (
                <p key={item.id}
                className='text-[15px] leading-[1.5]'
                >{item.name}</p>
              ))}
            </div>
            <div className="flex gap-[15px]">
              <div className="flex gap-[5px]">
              </div>
              <div className="flex gap-[5px]">
                <Link href={`/dashboard/orders/${order?.id}`} className="text-green-700 m-0 text-[15px] font-medium leading-[1.5]">Full details...</Link>
              </div>
            </div>
          </div>
        </div>

        <HoverCard.Arrow className="fill-white" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);
}
