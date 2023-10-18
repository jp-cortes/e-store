import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersection } from "@mantine/hooks";


  // Queries
export const useFetch = ({ query, fetchProducts }: { query: string[], fetchProducts: Function}) => {
   // Queries
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: query, 
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetchProducts(pageParam);
      return response;
    },
    getNextPageParam: (_, pages) => pages.length + 1,
    
   });
  
   const lastProductRef = useRef<HTMLElement>(null);
   const { ref, entry } = useIntersection({
    root: lastProductRef.current,
    threshold: 1
   });
  
   useEffect(() => {
    if(entry?.isIntersecting) fetchNextPage();
   }, [entry])
 return {
data,
isLoading,
ref,
 }
}
