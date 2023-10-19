'use client'
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useIntersection } from "@mantine/hooks";


export const useFetch = ({
  query,
  queryFunction,
}: {
  query: string[];
  queryFunction: Function;
}) => {
  // Queries
  const { data, fetchNextPage, hasNextPage, isLoading, refetch } = useInfiniteQuery({
      queryKey: query,
      queryFn: async ({ pageParam = 1 }) => {
        const response = await queryFunction(pageParam);
        return response;
      },
      getNextPageParam: (_, pages) => pages.length + 1,
    });

  const lastProductRef = useRef<HTMLElement>(null);
  const { ref, entry } = useIntersection({
    root: lastProductRef.current,
    threshold: 1,
  });

  useEffect(() => {
    if (entry?.isIntersecting) fetchNextPage();
  }, [entry]);
  return {
    data,
    isLoading,
    ref,
    refetch
  };
};
