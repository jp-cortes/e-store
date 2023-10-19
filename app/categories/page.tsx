'use client'
import { Suspense } from "react";
import { Card } from "../../components"
import { getAllProducts } from "../../services"
import { CardSkeleton } from "../../components/Skeletons/CardSkeleton";
import { useFetch } from "../../hooks/pagination";


export const runtime = 'edge';

async function fetchProducts(page: number) {
  const products = await getAllProducts();
  return products.slice((page - 1) * 6, page * 6)
}

export default function Categories() {
  
const { data, isLoading, ref } = useFetch({ query: ['products'], queryFunction: fetchProducts })
const  products = data?.pages.flatMap((product) => product);

  
  return (
    <div className="grid lg:grid-cols-3 gap-4 mt-8 mx-3 md:grid-cols-2 grid-cols-1">
      <h2 className="text-center my-8 font-semibold text-2xl block md:hidden lg:hidden">
        All Products
      </h2>

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
  );
}

