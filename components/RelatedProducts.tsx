'use client'

import { getProductsByCategoryId } from "../services";
import { Card } from "./Card"

type Props = {
  categoryId: number;
}

export async function RelatedProducts({ categoryId }: Props) {
  const dynamicData = await getProductsByCategoryId(`${categoryId}`);
    

  return (
    <div className='grid'>
            <h2 className='font-medium text-xl mx-auto'>Related Products</h2>

        <div className='grid lg:grid-cols-4 gap-1 mt-8 mx-3 md:grid-cols-2 grid-cols-1'>
      
        {dynamicData.map((product: Product) => (
          <Card key={product.id} product={product} isDetailsPage={true}/>
        ))}

    </div>
    </div>
  )
}
