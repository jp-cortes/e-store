import { Card } from "../../components/Card"
import { getAllProducts } from "../../services"





export default async function Categories() {
  const products = await getAllProducts();
  
  return (
    
    <div className='grid lg:grid-cols-4 gap-4 mt-8 mx-3 md:grid-cols-2 grid-cols-1'>
        {products.map((product: Product) => (
          <Card key={product.id} product={product} isDetailsPage={false}/>
          ))}
        
    </div>
          
  )
}

