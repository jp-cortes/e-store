'use client'
import { DeleteProduct } from '../..';
import { getProductsByPage } from '../../../services';
import { TableModifyProductsSkeleton } from '../../Skeletons/TableModifyProductsSkeleton';
import { usePagination } from '../../../hooks/paginatedQuery';
import { useState } from 'react';
import { Pagination } from '../pagination';
import Image from 'next/image';
import Link from 'next/link';


export function TableModifyProducts() {

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
    
    <table className=" hidden md:block lg:block min-w-full divide-y divide-borderGreen border border-solid border-borderGreen">
                  <thead className="bg-buttonGreen">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-lightGreen uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-lightGreen uppercase tracking-wider"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-lightGreen uppercase tracking-wider"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-lightGreen uppercase tracking-wider"
                      >
                        Id
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-lightGreen divide-y divide-borderGreen">
                    {data?.map((product: Product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-auto w-auto">
                              <Image
                                className="h-auto w-auto rounded-full"
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
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 capitalize">
                            {product.category.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            €{product.price}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {product.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link
                            href={`/dashboard/edit/${product.id}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </Link>
                        </td>
                        <td className=" relative px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <DeleteProduct product={product} refetch={refetch}/>
                        </td>
                      </tr>
                    ))}
                    {isLoading && <TableModifyProductsSkeleton/>}
                  </tbody>
                </table>
                <Pagination 
                  page={page} 
                  setPage={setPage} 
                  data={data} 
                  isPreviousData={isPreviousData} 
                  limit={limit} setLimit={setLimit} 
                  />
    </>
  )
}

