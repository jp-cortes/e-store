 
import { Card } from "../../../components"
import { getProductsByCategoryId } from '../../../services'
import { Suspense } from 'react'



export default async function Category({ params: { id } } : { params: { id: string }})  {

  const productID = id.split("-")[0]; //get the id from params
  const productsCategory = id.split("-")[1]; //get the id from params
    
  const products = await getProductsByCategoryId(`${productID}`);

  
 return (
  
   <>
    <div className='grid lg:grid-cols-3 gap-4 mt-8 mx-3 md:grid-cols-2 grid-cols-1'>
      
    <h2 className='text-center my-8 font-semibold text-2xl capitalize block md:hidden lg:hidden'>{productsCategory}</h2>
      
      <Suspense>

        {products.map((product: Product) => (
          <Card key={product.id} product={product} isDetailsPage={false}/>
          ))}
      </Suspense>
    </div>
   
   </>
  )
}


