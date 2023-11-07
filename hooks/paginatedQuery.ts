'use client'

import { useQuery } from "@tanstack/react-query";


export const usePagination = ({
  query,
  page,
  paginatedFunction,
}: {
  query: string[];
  page: number
  paginatedFunction: Function;
}) => {
  // Queries
  const { data, isLoading, refetch } = useQuery({
      queryKey: [query, page],
      queryFn: async () => {
        const response = await paginatedFunction();
        return response;
      },
      keepPreviousData: true,
    });


  return {
    data,
    isLoading,
    refetch
  };
};
