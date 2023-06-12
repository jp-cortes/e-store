import { Card } from "../../components/Card"
import { getAllProducts } from "../../services"

type Props = {}


export default async function Categories(props: Props) {
  const products = await getAllProducts()
  return (
    <div className='grid lg:grid-cols-4 gap-4 mt-8 mx-3 md:grid-cols-2 grid-cols-1'>
  {products.map((product) => (
            <Card key={product.id} product={product}/>
        ))}
    </div>
  )
}

