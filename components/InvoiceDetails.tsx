'use client'
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { DefaultAvatar } from "./DefaultAvatar";
import Image from "next/image";
import Link from "next/link";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Item } from "@radix-ui/react-dropdown-menu";
import { useRef } from "react";


type Props = {
    order: OrderDetail;
    goBackTo: string;
}

export async function InvoiceDetails({ order, goBackTo }: Props) {

  const pdfRef = useRef<HTMLDivElement | null>(null);

  function downloadPdf() {
    const input = pdfRef.current as HTMLDivElement;
    html2canvas(input).then(() => {
    //   const imgData = canvas.toDataURL(order.items)
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      pdf.internal.pageSize.getWidth();
      pdf.internal.pageSize.getHeight();
      // const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfHeight = pdf.internal.pageSize.getHeight();
    //   const imgWidth = canvas.width;
    //   const imgHeight = canvas.height;
    //   const ratio = Math.min(pdfWidth / imgWidth, pdfHeight /  imgHeight);
    //   const imgX = (pdfWidth - imgWidth * ratio);
    //   const imgY = 30;
      // pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('invoice.pdf')
    })
  }

  return (
    <>
      <div className='grid justify-center border-3 border-red-700' ref={pdfRef}>
    <h1 className='text-2xl ml-8 my-7 justify-self-center font-semibold'>Order Details</h1>
    <div className='flex flex-col justify-center content-center lg:gap-8'>
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
                    <p className='font-medium'>User email:</p>
                    <p className='font-normal'>{order.customer.user.email}</p>
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
      <div className="h-[2px] w-full bg-black" />
        <div className='flex justify-between'>
          <p className='font-medium'>Total:</p>
        <p>€ {" "}{
          order.items.map((item) => parseInt(item.price) * item.OrderProduct.amount).reduce((a:number, b: number) => a + b, 0)
          }</p>
        </div>
    </div>
    <div className="flex justify-center flex-initial w-full mt-5">
          <Link passHref href={goBackTo} className="">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
          <h3>Back</h3>
    </div>
    </div>
    <div>
    <button 
        className='w-24  p-1 md:p-2 lg:p-2 bg-buttonGreen hover:bg-hoverGreen text-white font-semibold rounded-md inline-block m-1'
        onClick={downloadPdf}>Download Pdf</button>
      </div>
    </>
  )
}

function item(value: ProductOrder, index: number, array: ProductOrder[]): void {
  throw new Error("Function not implemented.");
}

