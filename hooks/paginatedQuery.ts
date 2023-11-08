'use client'

import { useQuery } from "@tanstack/react-query";


export function usePagination({
  query,
  offset,
  paginatedFunction,
}: {
  query: string[];
  offset: number;
  paginatedFunction: Function;
}) {
  // Queries
  const { data, isLoading, refetch, isPreviousData } = useQuery({
      queryKey: [query, offset],
      queryFn: async () => {
        const response = await paginatedFunction();
        return response;
      },
      keepPreviousData: true,
    });


  return {
    data,
    isLoading,
    refetch,
    isPreviousData,
  };
};
