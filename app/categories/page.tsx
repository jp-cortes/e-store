'use client'
import { Suspense } from "react";
import { Card } from "../../components"
import { getAllProducts } from "../../services"


export const runtime = 'edge';


export default async function Categories() {
  const products = await getAllProducts();

  if(!products) return null;
  
  return (
    
    <div className='grid lg:grid-cols-3 gap-4 mt-8 mx-3 md:grid-cols-2 grid-cols-1'>
      
      <h2 className='text-center my-8 font-semibold text-2xl block md:hidden lg:hidden'>All Products</h2>
      
      <Suspense>

        {products?.map((product: Product) => (
          <Card key={product.id} product={product} isDetailsPage={false}/>
          ))}
        
      </Suspense>
    </div>
          
  )
}

