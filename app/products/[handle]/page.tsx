'use client'
import { useParams } from "next/navigation";
import { getProductsById } from "../../../services";

type Props = {}

export default async function Product (props: Props) {
  const params = useParams();
  const product = await getProductsById(params.handle);
console.log(product)
  return (
    <div>Product Detail page</div>
  )
}

