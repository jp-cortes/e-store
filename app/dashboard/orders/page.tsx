import { TableModifyOrders } from "../../../components"


type Props = {}

export default function Orders({}: Props) {
  return (
    <div>
      <h1>Orders</h1>
      <div className=''>
      <TableModifyOrders/>
      </div>
  </div>
  )
}