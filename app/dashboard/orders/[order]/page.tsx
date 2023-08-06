
import { NavbarDashboard } from "../../../../components"



export default function SingleOrder({ params: { order } } : { params: { order: string }}) {
  console.log(order, 'oder id')
  return (
    <>
    <NavbarDashboard/>
    <h1 className='text-2xl ml-8 my-7'>Update order</h1>

    </>
  )
}
