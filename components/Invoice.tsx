"use client";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

type Props = {
    order: OrderDetail
}

export function Invoice({ order }: Props) {

    const pdfRef = useRef<HTMLDivElement | null>(null);

    function downloadPdf() {
      const input = pdfRef.current as HTMLDivElement;
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4", true);
        pdf.internal.pageSize.getWidth();
        pdf.internal.pageSize.getHeight();
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = pdfWidth - imgWidth * ratio;
        const imgY = 30;
        pdf.addImage(
          imgData,
          "PNG",
          imgX,
          imgY,
          imgWidth * ratio,
          imgHeight * ratio
        );
        pdf.save("invoice.pdf");
      });
    }
  

  return (
    <>
    <div className="grid w-full mx-auto border-3  border-gray-700" ref={pdfRef}>
        <h1 className="text-2xl ml-8 my-7 justify-self-center font-semibold">
          E-store
        </h1>
        <div className="flex flex-wrap justify-center content-center lg:gap-2">
          <div className="flex flex-col justify-start flex-start">
            <p className="font-medium capitalize">
              Invoice #: <span className="font-normal">{order.id}</span>
            </p>
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
            <p className="font-medium">User email:</p>
            <p className="font-normal">{order.customer.user.email}</p>
            <p className="font-medium">User full name:</p>
            <p className="font-normal capitalize">
              {order.customer.name} {order.customer.lastName}
            </p>
          </div>
          <div className="flex flex-col w-full justify-center content-center mt-1 px-8 mx-8">
            <h3 className='font-semibold text-xl'>Items:</h3> <br />
            <div className='flex justify-between'>
                <p className='font-semibold inline-flex mx-2 w-[25%]'>Item Description</p>
                <p className='font-semibold inline-flex mx-2 w-[25%]'>Quantity</p>
                <p className='font-semibold inline-flex mx-2 w-[25%]'>Price</p>
                <p className='font-semibold inline-flex mx-2 w-[25%]'>Total</p>
            </div>
            {order.items.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between content-center">
                  <p className="font-medium capitalize w-[25%] text-start">{item.name}</p>
                  <p className="font-medium w-[25%] text-start">
                      {item.OrderProduct.amount}
                  </p>
                  <p className="font-medium w-[25%] text-start">
                      € {item.price}
                  </p>
                  <p className="font-medium w-[25%] text-start">
                      € {(Number(item.price) * item.OrderProduct.amount)}
                  </p>
                </div>
                <div className="h-[1px] w-full mt-2 bg-black" />
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <p className="font-medium">Total:</p>
            <p>
              €{" "}
              {order.items
                .map((item) => parseInt(item.price) * item.OrderProduct.amount)
                .reduce((a: number, b: number) => a + b, 0)}
            </p>
          </div>
        </div>
       
      </div>
      <div className="flex justify-center flex-initial w-full mt-5">
          <Link passHref href={'/my-orders'} className="">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
          </Link>
          <h3>Back</h3>
        </div>
      <div>
        <button
          className="w-24  p-1 md:p-2 lg:p-2 bg-buttonGreen hover:bg-hoverGreen text-white font-semibold rounded-md inline-block m-1"
          onClick={downloadPdf}
        >
          Download Pdf
        </button>
      </div>
    </>
  )
}
