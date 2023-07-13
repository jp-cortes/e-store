// 'use client'
import { getProductsByPage } from '../../services';
import { Chart } from '../../components/Charts';
import Image from 'next/image';
import Link from 'next/link';
import { NavbarDashboard } from '../../components';

export default async function Dasboard() {
  const productsByPage = await getProductsByPage(20, 2);
  

  const categoryCount = productsByPage.map((product) => product.category.name);
 
  const countOcurrences = (array: any[]) => array.reduce((prev: { [x: string]: number; }, current: string | number) => ((prev[current] = ++prev[current] || 1), prev), {});
 
 const chartData = {
   datasets: [
     {
       label: 'Categories',
       data: countOcurrences(categoryCount),
       borderWidth: 2,
       backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#de810a', '#2a71d0'],
     },
   ]
 }

  return (
    <>
      <NavbarDashboard />
      <div>
        <Chart chartData={chartData} />
        <Link href="/"></Link>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
          <tbody className="bg-white divide-y divide-gray-200">
            {productsByPage.map((product) => (
              <tr key={`Product-item-${product.id}`}>
                <td className="px-6 py-4 whitespace-nowrap">
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
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 capitalize">
                    {product.category.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    Category Id: {`${product.category.id}`}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  € {product.price}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{`${product.id}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
