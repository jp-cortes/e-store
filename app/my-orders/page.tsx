'use client'
import { Navbar } from "../../components/Navbar"
import Cookie  from 'js-cookie';
import { getOrdersByCustomer } from "../../services";

type Props = {}

export default async function MyOrders(props: Props) {
  const userId = Cookie.get('userId');
  const allMyOrders = await getOrdersByCustomer(`${userId}`);
  console.log(allMyOrders, 'my orders')
  return (
   <>
   <Navbar/>
    <div>MyOrders
      <div>
        {[...allMyOrders].map((order) => (
          <div key={order.id}>
            <p>Is Paid: {`${order.paid}`}</p>
            <p>Current status: {order.status}</p>
            <p>Date: {order.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
   </>
  )
}

