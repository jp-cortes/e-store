'use client'
import Image from 'next/image';
import { getProductsByPage } from '../../../services';
import { TableProductsOverviewSkeleton } from '../../Skeletons/TableProductsOverviewSkeleton';
import { Pagination } from '../pagination';
import { useState } from 'react';
import { usePagination } from '../../../hooks/paginatedQuery';




export function TableProductsOverview() {

  const [page, setPage] = useState(0); // offset
  const [limit, setLimit] = useState(9); // limit

  async function fetchProducts() {
    // fetch product
      const response = await getProductsByPage(limit, page);
      return response;
    }

  const { data, isLoading, refetch, isPreviousData } = usePagination({ 
    query: ['modify_products'], // query
    offset: page, // offset
    paginatedFunction: fetchProducts // fectch products
  });
  
 
  return (
    <>
      <table className="hidden md:block lg:block min-w-full divide-y divide-borderGreen border border-solid border-borderGreen">
        <thead className="bg-buttonGreen">
          <tr>
            <th
              scope="col"
              className="w-[25%] px-6 py-3 text-left text-xs font-medium text-lightGreen uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="w-[25%] px-6 py-3 text-left text-xs font-medium text-lightGreen uppercase tracking-wider"
            >
              Category
            </th>
            <th
              scope="col"
              className="w-[25%]  px-6 py-3 text-left text-xs font-medium text-lightGreen uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="w-[25%]  px-6 py-3 text-left text-xs font-medium text-lightGreen uppercase tracking-wider"
            >
              Id
            </th>
          </tr>
        </thead>
        <tbody className="bg-lightGreen divide-y divide-borderGreen">
          {data?.map((product: Product) => (
            <tr key={`Product-item-${product.id}`}>
              <td className="w-[25%]  px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-auto w-auto">
                    <Image
                      className=" rounded-full"
                      width={40}
                      height={40}
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {product.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="w-[25%]  px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 capitalize">
                  {product.category.name}
                </div>
                <div className="text-sm text-gray-500">
                  Category Id: {`${product.category.id}`}
                </div>
              </td>
              <td className="w-[25%]  px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  € {product.price}
                </span>
              </td>
              <td className="w-[25%]  px-6 py-4 whitespace-nowrap text-sm text-gray-500">{`${product.id}`}</td>
              {/* {i === products.length - 1 && <div ref={ref} />} */}
            </tr>
          ))}
          {isLoading && <TableProductsOverviewSkeleton />}
        </tbody>
      </table>
      <Pagination
        page={page}
        setPage={setPage}
        data={data}
        isPreviousData={isPreviousData}
        limit={limit}
        setLimit={setLimit}
      />
    </>
  );
}

