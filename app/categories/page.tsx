'use client'
import { Suspense } from "react";
import { Card } from "../../components"
import { getAllProducts } from "../../services"
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";


export const runtime = 'edge';


export default async function Categories() {
  const products = await getAllProducts();
  
  async function fetchProducts(page: number) {
     return products.slice((page - 1) * 3, page * 3)
  }
  
  // Queries
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery( 
    ['products'], 
    async ({ pageParam = 1 }) => {
    const response = await fetchProducts(pageParam);
      return response
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1
      },
      initialData: {
        pages: [products.slice(0, 3)],
        pageParams: [1]
      }
    }
  )

  // const products = await getAllProducts();

console.log(data, 'data')
  
  return (
    
    <div className='grid lg:grid-cols-3 gap-4 mt-8 mx-3 md:grid-cols-2 grid-cols-1'>
      
      <h2 className='text-center my-8 font-semibold text-2xl block md:hidden lg:hidden'>All Products</h2>
      
      <Suspense >

        {data?.pages.map((product: Product) => (
          <Card key={product.id} product={product} isDetailsPage={false}/>
          ))}
        
      </Suspense>
    </div>
          
  )
}

