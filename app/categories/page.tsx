
import { Suspense } from "react";
import { Card } from "../../components/Card"
import { getAllProducts } from "../../services"





export default async function Categories() {
  const dynamicData = await getAllProducts();
  
  return (
    
    <div className='grid lg:grid-cols-3 gap-4 mt-8 mx-3 md:grid-cols-2 grid-cols-1'>
      <Suspense>

        {dynamicData.map((product: Product) => (
          <Card key={product.id} product={product} isDetailsPage={false}/>
          ))}
        
      </Suspense>
    </div>
          
  )
}

