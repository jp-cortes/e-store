'use client'
import { NavbarUser } from "../../components"
import { getOrdersByCustomer } from "../../services";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


export default async function MyOrders() {

  const allMyOrders: ResumeOrder[] = await getOrdersByCustomer();

  return (
    <>
      <NavbarUser />
      <div className="grid text-center justify-center w-auto">
        <div className="lg:w-[800px]">
          <div className="w-[150px] mx-auto relative flex ">
            <h1 className=" text-2xl font-semibold ">My Orders</h1>
            <Link passHref href="/my-order" className="absolute right-0 top-2">
              <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
            </Link>
          </div>
          <div className="lg:w-[800px] flex flex-wrap h-auto overflow-y-auto mb-6">
            {allMyOrders?.length === 0 ? (
              <div className="flex flex-col justify-center mx-auto">
                <h3 className="text-center mt-10">You have no Orders</h3>
                <Link
                  href="/categories"
                  className="bg-lightGreen text-center mt-10 p-2 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white"
                >
                  Start shopping!
                </Link>
              </div>
            ) : (
              allMyOrders?.map((order) => (
                <div
                  key={order.id}
                  className="border-2 rounded-lg mt-2 w-60 px-2 mx-auto max-h-max"
                >
                  <p className="font-medium">
                    Paid:{" "}
                    <span className="capitalize font-normal">{`${order.paid}`}</span>
                  </p>
                  <p className="font-medium">
                    Current status:{" "}
                    <span className="capitalize font-normal">
                      {order.status}
                    </span>
                  </p>
                  <Link href={`/my-orders/order/${order.id}`} passHref>
                    <span className="capitalize font-medium text-blue-400 mx-3 hover:text-red-400 hover:underline">
                      Details
                    </span>
                  </Link>
                  
                  <Link href={`/my-orders/invoice/${order.id}`} passHref>
                    <span className="inline-block md:hidden lg:hidden capitalize font-medium text-blue-400 mx-3 hover:text-red-400 hover:underline">
                      Invoice
                    </span>
                  </Link>
                  <p className="font-medium">
                    Date:{" "}
                    <span className="capitalize font-normal">
                      {order.createdAt.slice(0, 10)}
                    </span>
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

