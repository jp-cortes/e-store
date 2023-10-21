'use client'

import { Suspense } from "react";
import { getProductsByCategoryId } from "../services";
import { Card } from "./Card"
import { CardSkeleton } from "./Skeletons/CardSkeleton";
import { useFetch } from "../hooks/pagination";

type Props = {
  categoryId: number;
}

export function RelatedProducts({ categoryId }: Props) {
  
  async function fetchProductsByCategory(page: number) {
    const response = await getProductsByCategoryId(`${categoryId}`);
    return response;
  }

const { data, isLoading } = useFetch({ query: ['related_products'], queryFunction: fetchProductsByCategory })
const  products = data?.pages.flatMap((product) => product);

    

  return (
    <div className='mt-10 grid'>
            <h2 className='font-medium text-xl mx-auto'>Related Products</h2>

        <div className='grid lg:grid-cols-4 gap-1 mt-8 mx-3 md:grid-cols-2 grid-cols-1'>
      <Suspense>

        {products?.map((product: Product) => (
          <div key={product.id}>
            <Card product={product} />
          </div>
        ))}
        {isLoading && <CardSkeleton />}
      </Suspense>

    </div>
    </div>
  )
}
