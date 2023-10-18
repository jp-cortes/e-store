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
  
  // Queries
//   const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
//   queryKey: ['product'], 
//   queryFn: async ({ pageParam = 1 }) => {
//     const response = await fetchProducts(pageParam);
//     return response;
//   },
//   getNextPageParam: (_, pages) => pages.length + 1,
  
//  });

//  const lastProductRef = useRef<HTMLElement>(null);
//  const { ref, entry } = useIntersection({
//   root: lastProductRef.current,
//   threshold: 1
//  });

//  useEffect(() => {
//   if(entry?.isIntersecting) fetchNextPage();
//  }, [entry])
const { data, isLoading, ref } = useFetch({ query: ['products'], fetchProducts })
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
        {/* {products?.map((product, i) => {
          if(i === products.length - 1) 
          return <div ref={ref}><Card key={product.id} product={product}/></div>
        
        return <Card key={product.id} product={product}/>
        })} */}
        {isLoading && <CardSkeleton />}
      </Suspense>
    </div>
  );
}

