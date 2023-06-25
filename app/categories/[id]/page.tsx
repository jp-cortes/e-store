'use client'
 

import { useParams } from 'next/navigation'
import { Card } from "../../../components/Card"
import { getProductsByCategoryId } from '../../../services'
import { Suspense, useEffect, useState } from 'react'

type Props = {}

export default async function Category(props: Props)  {
  const [category, setCategory] = useState<Products>([] as Products);
  const params = useParams();
  const productID = params.id.split("-")[0]; //get the genre code
    
  const dynamicData = await getProductsByCategoryId(`${productID}`);

  
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


