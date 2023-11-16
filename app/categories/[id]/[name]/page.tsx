 'use client'
import { Card } from "../../../../components"
import { getProductsByCategoryId } from '../../../../services'
import { Suspense } from 'react'

import { useParams } from 'next/navigation';
import { useFetch } from "../../../../hooks/infiniteQuery";
import { CardSkeleton } from "../../../../components/Skeletons/CardSkeleton";



export default function Category()  {
  const params = useParams()

  const categoryId = params.id as string; //get the id from params
  const productsCategory = params.name as string; //get the name from params

  async function fetchProductsByCategory(page: number) {
    const products = await getProductsByCategoryId(categoryId);
    return products.slice((page - 1) * 6, page * 6)
  }

const { data, isLoading, ref } = useFetch({ query: [`category_${productsCategory}`], queryFunction: fetchProductsByCategory })
const  products = data?.pages.flatMap((product: Products) => product);


 return (
  
   <>
    <div className='grid lg:grid-cols-3 gap-4 mt-8 mx-3 md:grid-cols-2 grid-cols-1'>
      
    <h2 className='text-center my-8 font-semibold text-2xl capitalize block md:hidden lg:hidden'>{productsCategory}</h2>
      
      <Suspense>

        {products?.map((product, i) => (
          <div key={product.id}>
            <Card product={product} />
            {i === products.length - 1 && <div ref={ref} />}
          </div>
          ))}
          {isLoading && <CardSkeleton />}
      </Suspense>
    </div>
   
   </>
  )
}


