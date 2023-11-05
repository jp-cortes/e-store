'use client'


import { ModifyProductsMobile, NavbarDashboard, TableModifyProducts } from '../../../components';
import { FormCreateProduct } from '../../../components/Forms';
import { Suspense } from 'react';

export const runtime = 'edge';

export default  function ProductsDashboard() {
  

  return (
    <>
      <NavbarDashboard />
      <div className="w-full mt-2">
        <div className="lg:flex lg:items-center lg:justify-between mb-8 px-7">
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              List of Products
            </h2>
          </div>

          <FormCreateProduct />
        </div>

        <div className="grid justify-center w-full">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <Suspense>

                <TableModifyProducts />
              </Suspense>
              </div>
            </div>
          <Suspense>

            <ModifyProductsMobile />
          </Suspense>
        </div>
      </div>
    </>
  );
}

