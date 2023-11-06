'use client'
import Image from "next/image"
import { OrderDetailsHover } from "../OrderDetailsHover";
import { DefaultAvatar } from "../../DefaultAvatar";
import { CheckIcon } from "@heroicons/react/24/outline";
import { UpdateOrderStatus } from "../../Forms";
import { getOrders } from "../../../services";
import { useFetch } from "../../../hooks/infiniteQuery";
import { TableOrdersSkeleton } from "../../Skeletons/TableOrdersSkeleton";

async function fetchOrders(page: number) {
  // fetch orders
  const orders = await getOrders();
  //return the first 9 orders
  return orders?.slice((page - 1) * 9, page * 9);
}

export function TableModifyOrders() {
const currentStatus = {
  onTheWay: "on the way",
  delivered: "delivered",
  canceled: "canceled"
}

// hook
const { data, isLoading, ref, refetch } = useFetch({ query: ['all_orders'], queryFunction: fetchOrders })
// data is return as an array of arrays
// the flatMap will retun one array of Orders  
const  orders = data?.pages.flatMap((order: OrderDetail[]) => order);


  return (
        <table className="min-w-full divide-y divide-borderGreen hidden border border-solid border-borderGreen lg:block">
          <thead className="bg-ordersGreen ">
            <tr>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-900 "
              >
                <div className="flex items-center gap-x-3">
                  <button className="flex items-center gap-x-2">
                    <span>Order</span>

                    <svg
                      className="h-3"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0.1"
                      />
                      <path
                        d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0.1"
                      />
                      <path
                        d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0.3"
                      />
                    </svg>
                  </button>
                </div>
              </th>

              <th
                scope="col"
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-900 "
              >
                Date
              </th>

              <th
                scope="col"
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-900 "
              >
                Paid
              </th>

              <th
                scope="col"
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-900 "
              >
                Status
              </th>

              <th
                scope="col"
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-900 "
              >
                Customer
              </th>

              <th
                scope="col"
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-900 "
              >
                Purchase
              </th>

              <th scope="col" className="relative py-3.5 px-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-lightGreen divide-y divide-borderGreen ">
            {orders?.map((order, i) => (
              <tr key={order?.id}>
                <td className="px-4 py-3.5 text-sm font-medium text-gray-700 whitespace-nowrap">
                  <div className="inline-flex items-center gap-x-3">
                    <span># {order?.id}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700  whitespace-nowrap">
                  {order?.createdAt.slice(0, 10)}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                  <div
                    className={`${
                      order?.paid
                        ? "text-emerald-500 bg-emerald-100/60"
                        : "text-rose-500 bg-rose-100/60"
                    } inline-flex items-center px-3 py-1 rounded-full gap-x-2`}
                  >
                    <p className="text-sm font-normal">{`${order?.paid}`}</p>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                  <div className={`${order?.status === currentStatus.onTheWay && 'text-yellow-500 bg-yellow-100/60'}
                   ${order?.status === currentStatus.delivered && 'text-green-500 bg-green-100/60'} 
                   ${order?.status === currentStatus.canceled && 'text-red-500 bg-red-100/60'}
                   inline-flex items-center px-3 py-1 rounded-full gap-x-2 capitalize`}>
                    
                    <CheckIcon className='w-3 h-3' />
                    
                    <p className="text-sm font-normal">{order?.status}</p>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                  <div className="flex items-center gap-x-2">
                    {order?.customer.avatar ? (
                      <Image
                      className="object-cover w-auto h-auto rounded-full"
                        width={32}
                        height={32}
                        src={order?.customer?.avatar}
                        alt="avatar"
                      />
                    ) : (
                      <DefaultAvatar userName={order?.customer?.name} bgColor='bg-red-400'/>
                    )}
                    <div className="flex gap-2">
                      <p className="text-sm font-medium text-gray-700 capitalize">
                        {order?.customer.name}
                      </p>
                      <p className="text-sm font-medium text-gray-700 capitalize">
                        {order?.customer.lastName}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700  whitespace-nowrap">
                  {order?.items[0].name}...
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  <div className="flex items-center gap-x-6">
                    <OrderDetailsHover order={order}/>

                    
                    <UpdateOrderStatus order={order} refetch={refetch}/>
                  </div>
                </td>
                {i === orders.length - 1 && <div ref={ref} />}
              </tr>
            ))} 
            {isLoading && <TableOrdersSkeleton />}
          </tbody>
        </table>
      
  );
}
