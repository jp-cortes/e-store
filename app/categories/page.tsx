'use client'
import { Suspense } from "react";
import { Card } from "../../components"
import { getAllProducts } from "../../services"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { CardSkeleton } from "../../components/Skeletons/CardSkeleton";


export const runtime = 'edge';
const allProducts = getAllProducts();

async function fetchProducts(page: number) {
  const products = await getAllProducts();
  return products.slice((page - 1) * 6, page * 6)
}

export default function Categories() {
  // const products = await getAllProducts();
  
  
  // Queries
  const { data, fetchNextPage, isFetchingNextPage, error } = useInfiniteQuery<Products>({
  queryKey: ['product'], 
  queryFn: async ({ pageParam = 1 }) => {
    const response = await fetchProducts(pageParam);
    return response;
  },
  getNextPageParam: (_, pages) => {
    return pages.length + 1;
  },
  // initialData: {
  //   pages: [allProducts.slice(0, 6)],
  //   pageParams: [1]
  // }
 })
const  products = data?.pages.flatMap((product) => product)
console.log(products, 'data')
  
  return (
    
    <div className='grid lg:grid-cols-3 gap-4 mt-8 mx-3 md:grid-cols-2 grid-cols-1'>
      
      <h2 className='text-center my-8 font-semibold text-2xl block md:hidden lg:hidden'>All Products</h2>
      
      <Suspense >

        {products?.map((product) => (
              <Card key={product.id} product={product} isDetailsPage={false}/>
            ))}
       
      </Suspense>
      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage
        ? <CardSkeleton/>
      : (products?.length ?? 0) > 3
      ? 'Load More'
      : 'Nothing to load'}
      </button>

    </div>
          
  )
}

