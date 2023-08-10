'use client'
import Image from "next/image"
import { OrderDetailsHover } from "../OrderDetailsHover";
import { DefaultAvatar } from "../../DefaultAvatar";

type Props = {
  orders: OrderDetail[]; 
}

export async function TableModifyOrders({ orders }: Props) {


  return (
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead className="bg-gray-50 ">
            <tr>
              <th
                scope="col"
                className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
              >
                <div className="flex items-center gap-x-3">
                  <input
                    type="checkbox"
                    className="text-blue-500 border-gray-300 rounded "
                  />
                  <button className="flex items-center gap-x-2">
                    <span>Invoice</span>

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
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Date
              </th>

              <th
                scope="col"
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Paid
              </th>

              <th
                scope="col"
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Status
              </th>

              <th
                scope="col"
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Customer
              </th>

              <th
                scope="col"
                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
              >
                Purchase
              </th>

              <th scope="col" className="relative py-3.5 px-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white   divide-y divide-gray-200 ">
            {orders?.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                  <div className="inline-flex items-center gap-x-3">
                    <input
                      type="checkbox"
                      className="text-blue-500 border-gray-300 rounded dark:ring-offset-gray-900 dark:border-gray-700"
                    />

                    <span>#{order.id}</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                  {order.createdAt.slice(0, 10)}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                  <div
                    className={`${
                      order.paid
                        ? "text-emerald-500 bg-emerald-100/60"
                        : "text-rose-500 bg-rose-100/60"
                    } inline-flex items-center px-3 py-1 rounded-full gap-x-2`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <p className="text-sm font-normal">{`${order.paid}`}</p>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                  <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-yellow-500 bg-yellow-100/60 ">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <p className="text-sm font-normal">{order.status}</p>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                  <div className="flex items-center gap-x-2">
                    {order.customer.avatar ? (
                      <Image
                        width={32}
                        height={32}
                        className="object-cover w-auto h-auto rounded-full"
                        src={order?.customer?.avatar}
                        alt="avatar"
                      />
                    ) : (
                      <DefaultAvatar userName={order?.customer?.name} bgColor='bg-red-400'/>
                    )}
                    <div className="flex gap-2">
                      <p className="text-sm font-medium text-gray-600 capitalize">
                        {order.customer.name}
                      </p>
                      <p className="text-sm font-medium text-gray-600 capitalize">
                        {order.customer.lastName}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                  {order.items[0].name}...
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                  <div className="flex items-center gap-x-6">
                    <button 
                    onClick={() => console.log('click')}
                    className="text-gray-500 transition-colors duration-200   hover:text-indigo-500 focus:outline-none">
                      Update status
                    </button>

                    <OrderDetailsHover order={order}/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
  );
}
