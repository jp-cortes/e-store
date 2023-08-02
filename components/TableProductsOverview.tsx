import Image from 'next/image';


type Props = {
    data: Products;
}

export function TableProductsOverview({ data }: Props) {
  return (
    <table className="hidden md:block lg:block min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="w-[25%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="w-[25%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="w-[25%]  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="w-[25%]  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Id
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((product) => (
              <tr key={`Product-item-${product.id}`}>
                <td className="w-[25%]  px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <Image
                        className="h-10 w-10  rounded-full"
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
              </tr>
            ))}
          </tbody>
        </table>
  );
}

