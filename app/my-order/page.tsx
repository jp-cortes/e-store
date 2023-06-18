import { useShoppingCart } from "../../store/Cart";


type Props = {}

export default function MyOrder(props: Props) {
  //context
  const { items, subTotal } = useShoppingCart();
  return (
   
    <div></div>
  )
}

