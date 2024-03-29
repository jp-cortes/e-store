"use client";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";



export function Invoice({ order }: { order: OrderDetail }) {

    const pdfRef = useRef<HTMLDivElement | null>(null);

    function downloadPdf() {
      // function to create a pdf from an order
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
        const ratio = Math.max(pdfWidth / imgWidth, pdfHeight / imgHeight);
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
        pdf.save(`invoice-${order.id}-${order.customer.name}-${order.customer.lastName}.pdf`);
      });
    }
  

  return (
    <>
      <div className="flex justify-between content-center w-full mb-8">
        <div className="flex justify-center flex-initial w-full mt-5">
          <Link passHref href={"/my-orders"} className="flex">
            <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />{" "}
            <span className="">Back</span>
          </Link>
        </div>

        <button
          className="w-32 p-1 md:p-2 lg:p-2 bg-buttonGreen hover:bg-hoverGreen text-white font-semibold rounded-md inline-block m-1"
          onClick={downloadPdf}
        >
          Download PDF
        </button>
      </div>
      <div
        className="bg-lightGreen print:bg-white md:flex lg:flex xl:flex print:flex md:justify-center lg:justify-center xl:justify-center print:justify-center"
        ref={pdfRef}
      >
        <div className="w-full bg-white lg:w-full xl:w-2/3 lg:mt-20 lg:mb-20 lg:shadow-xl xl:mt-02 xl:mb-20 xl:shadow-xl print:transform print:scale-90">
          <div className="flex flex-col items-center px-8 pt-20 text-lg text-center bg-white border-t-8 border-green-700 md:block lg:block xl:block print:block md:items-start lg:items-start xl:items-start print:items-start md:text-left lg:text-left xl:text-left print:text-left print:pt-8 print:px-2 md:relative lg:relative xl:relative print:relative">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-4xl ">
              E-store
            </h1>
            <div className="flex flex-row mt-12 mb-2 ml-0 text-2xl font-bold md:text-2xl lg:text-3xl xl:text-3xl print:text-2xl lg:ml-12 xl:ml-12">
              INVOICE
              <div className="text-green-700">
                <span className="mr-4 text-sm">■ </span> #
              </div>
              <span id="invoice_id" className="text-gray-500">
                {order.id}
              </span>
            </div>
            <div className="flex flex-col lg:ml-12 xl:ml-12 print:text-sm">
              <span>Issue date: {order.createdAt.slice(0, 10)}</span>
              <span>Paid date: {order.createdAt.slice(0, 10)}</span>
              <span>Due date: {order.createdAt.slice(0, 10)}</span>
            </div>
            <div className="px-8 py-2 mt-16 mb-16 capitalize text-3xl font-bold text-green-700 border-4 border-green-700 border-dotted md:absolute md:right-0 md:top-0 md:mr-12 lg:absolute lg:right-0 lg:top-0 xl:absolute xl:right-0 xl:top-0 print:absolute print:right-0 print:top-0 lg:mr-20 xl:mr-20 print:mr-2 print:mt-8">
              {order.status}
            </div>
          </div>
          <div className="border-gray-300 md:mt-8 print:hidden" />
          <div>
            <div
              id="content"
              className="flex justify-center md:p-8 lg:p-20 xl:p-20 print:p-2"
            >
              <table
                className="w-full text-left table-auto print:text-sm"
                id="table-items"
              >
                <thead>
                  <tr className="text-white bg-gray-700 print:bg-gray-300 print:text-black">
                    <th className="px-4 py-2">Items</th>
                    <th className="px-4 py-2 text-right">Qty</th>
                    <th className="px-4 py-2 text-right">Unit Price</th>
                    <th className="px-4 py-2 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-2 border">{item.name}</td>
                      <td className="px-4 py-2 text-right border tabular-nums slashed-zero">
                        {item.OrderProduct.amount}
                      </td>
                      <td className="px-4 py-2 text-right border tabular-nums slashed-zero">
                        € {item.price}
                      </td>
                      <td className="px-4 py-2 text-right border tabular-nums slashed-zero">
                        € {Number(item.price) * item.OrderProduct.amount}
                      </td>
                    </tr>
                  ))}

                  <tr className="text-white bg-gray-700 print:bg-gray-300 print:text-black">
                    <td className="invisible"></td>
                    <td className="invisible"></td>
                    <td className="px-4 py-2 text-right border">
                      <span className="flag-icon flag-icon-hu print:hidden"></span>{" "}
                      VAT
                    </td>
                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">
                      19%
                    </td>
                  </tr>
                  <tr className="text-white bg-gray-700 print:bg-gray-300 print:text-black">
                    <td className="invisible"></td>
                    <td className="invisible"></td>
                    <td className="px-4 py-2 text-right border">TAX</td>
                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">
                      € 0.00
                    </td>
                  </tr>
                  <tr className="text-white bg-gray-700 print:bg-gray-300 print:text-black">
                    <td className="invisible"></td>
                    <td className="invisible"></td>
                    <td className="px-4 py-2 font-extrabold text-right border">
                      Total
                    </td>
                    <td className="px-4 py-2 text-right border tabular-nums slashed-zero">
                      €{" "}
                      {order.items
                        .map(
                          (item) =>
                            parseInt(item.price) * item.OrderProduct.amount
                        )
                        .reduce((a: number, b: number) => a + b, 0)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-20 mb-20 print:mb-2 print:mt-2">
            <h2 className="text-xl font-semibold text-center print:text-sm">
              Payment History
            </h2>
            <div className="flex flex-col items-center text-center print:text-sm">
              <p className="font-medium">
                {" "}
                {order.createdAt.slice(0, 10)}{" "}
                <span className="font-light">
                  <i className="lab la-cc-mastercard la-lg"></i> Credit Card
                  Payment: €{" "}
                  {order.items
                    .map(
                      (item) => parseInt(item.price) * item.OrderProduct.amount
                    )
                    .reduce((a: number, b: number) => a + b, 0)}{" "}
                  (Mastercard XXXX-XXXX-XXXX-0122)
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mb-24 leading-relaxed print:mt-0 print:mb-0">
            <span className="w-64 text-3xl text-center text-black font-mono border-b-2 border-black border-dotted opacity-75 print:text-lg">
              {order.customer.name} {order.customer.lastName}
            </span>
            <span className="text-center">Buyer</span>
          </div>
          <footer className="flex flex-col items-center justify-center pb-20 leading-loose text-white bg-gray-700 print:bg-white print:pb-0">
            <span className="mt-4 text-xs print:mt-0">
              Invoice generated on {order.createdAt.slice(0, 10)}
            </span>
            <span className="mt-4 text-base print:text-xs">
              © 2023 E-store. All rights reserved.
            </span>
            <span className="print:text-xs">
              US - New York, NY 10023 98-2 W 67th St
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}
