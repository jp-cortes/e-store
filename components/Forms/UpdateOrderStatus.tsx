'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { UpdateOrderValues, updateOrderValuesSchema } from "../../utils/schemas/orders.";
import { ErrorText } from "../ErrorText";
import * as Dialog from '@radix-ui/react-dialog';
import { updateOrderStatus } from "../../services";

export function UpdateOrderStatus({ order } : { order: OrderDetail}){
  const [open, setOpen] = useState(false); 
  
  const { 
        register,
        handleSubmit,
        formState: { errors, isSubmitting } } = useForm<UpdateOrderValues>({
       resolver: zodResolver(updateOrderValuesSchema)
      })

      async function handleUpdate(data: UpdateOrderValues) {
      await updateOrderStatus({ id: order.id, status: data.orderStatus });
      setOpen(false);
      
      }

    return(
  <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger asChild>
      <button className="bg-buttonGreen border-2 border-solid p-1 font-semibold rounded-md border-borderGreen transition-colors duration-200 text-white hover:bg-hoverGreen focus:outline-none">
        Update Status
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-background/80 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <Dialog.Title className=" m-0 text-[17px] font-medium">
          Order # {" "} {order.id}
        </Dialog.Title>
        <Dialog.Description className=" mt-[10px] mb-5 text-[15px] leading-normal">
          Make changes to the order here. Click Update when you&apos;re done.
        </Dialog.Description>
        <form onSubmit={handleSubmit((data) => handleUpdate(data))} 
        className="bg-lightGreen mb-[15px] flex items-center gap-5">
          <label className="w-[90px] text-right text-[15px]" htmlFor="orderStatus">
            Status
          </label>
          <select 
          {...register("orderStatus")}
          id="orderStatus"
          className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-1 text-[15px] shadow-[0_0_0_1px]"
          
          >
          <option value="">--select--</option>
          <option value="on the way">On the Way</option>
          <option value="delivered">Delivered</option>
          <option value="canceled">Canceled</option>
        </select>
        <ErrorText>{errors.orderStatus?.message}</ErrorText>
        <div className="mt-[25px] flex justify-end">
        
            <button className="bg-buttonGreen text-white hover:bg-hoverGreen inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={isSubmitting}
            type="submit"
            >
              Update
            </button>
            
        </div>
        </form>
        <Dialog.Close asChild>
          <button
            className="text-black hover:bg-gray-500 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <XMarkIcon className='w-6 h-6' />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
}