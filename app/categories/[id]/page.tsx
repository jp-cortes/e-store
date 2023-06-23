'use client'
 

import { useParams } from 'next/navigation'
import { Card } from "../../../components/Card"
import { getProductsByCategoryName } from '../../../services'
import { Suspense, useEffect, useState } from 'react'

type Props = {}

export default async function Category(props: Props)  {
  const [category, setCategory] = useState<Products>([] as Products);
  const params = useParams();
  
  useEffect(() => {
    async function fetchData() {
      const response = await getProductsByCategoryName(`${params.id}`);
      return setCategory(response);
    }
    fetchData();
  }, [params.id]);


  
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


