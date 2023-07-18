'use client'


import { getAllProducts } from '../../../services';
import { NavbarDashboard } from '../../../components';
import { FormCreateProduct } from '../../../components/Forms';
import { DeleteProduct } from '../../../components';
import { CardDashboard } from '../../../components';
import Image from 'next/image';
import Link from 'next/link';


export default  async function ProductsDashboard() {

    const products = await getAllProducts();



  return (
    <>
      <NavbarDashboard />
      <div className="w-full">
        <div className="lg:flex lg:items-center lg:justify-between mb-8 px-7">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              List of Products
            </h2>
          </div>

          <FormCreateProduct />
        </div>

        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className=" hidden md:block lg:block min-w-full divide-y divide-gray-200">
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
                    {products?.map((product) => (
                      <tr key={`Product-item-${product.id}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <Image
                                className="h-10 w-10 rounded-full"
                                width={40}
                                height={40}
                                src={product.image}
                                alt=""
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
                          <DeleteProduct product={product} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                  <>
                  
                <div className='md:hidden lg:hidden flex flex-wrap justify-around'>
          {products.map((product) => (
           <>
            <CardDashboard key={product.id} product={product}/>
            <div className='w-[280px] flex justify-between content-center'>
          
          <Link
            href={`/dashboard/edit/${product.id}`}
            className="text-indigo-600 hover:text-indigo-900"
          >
            Edit
          </Link>
        
        <p className=" relative text-sm font-medium">
          <DeleteProduct product={product} />
        </p>
</div>
           </>
          ))}
        </div>
                  </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

