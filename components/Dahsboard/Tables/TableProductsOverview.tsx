'use client'
import Image from 'next/image';
import { getAllProducts } from '../../../services';
import { useFetch } from '../../../hooks/pagination';



async function fetchProducts(page: number) {
  const products = await getAllProducts();
  return products.slice((page - 1) * 9, page * 9)
}

export function TableProductsOverview() {

  const { data, isLoading, ref } = useFetch({ query: ['all_products'], queryFunction: fetchProducts })
  const  products = data?.pages.flatMap((product) => product);

  return (
    <table className="hidden md:block lg:block min-w-full divide-y divide-borderGreen border-2 border-solid border-borderGreen">
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
          <tbody className="bg-lightGreen divide-y divide-lightGreen">
            {products?.map((product, i) => (
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
                {i === products.length - 1 && <div ref={ref} />}
              </tr>
            ))}
          </tbody>
        </table>
  );
}

