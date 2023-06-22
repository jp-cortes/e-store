'use client'
 

import { useParams } from 'next/navigation'
import { Card } from "../../../components/Card"
import { getProductsByCategoryName } from '../../../services'
import { Suspense } from 'react'

type Props = {}

export default async function Category(props: Props)  {
  const params = useParams();
  const category = await getProductsByCategoryName(`${params.id}`);



  
 return (
  
    <div className='grid lg:grid-cols-3 gap-4 mt-8 mx-3 md:grid-cols-2 grid-cols-1'>
      <Suspense>

        {category.map((product: Product) => (
          <Card key={product.id} product={product} isDetailsPage={false}/>
          ))}
      </Suspense>

    </div>
  )
}


