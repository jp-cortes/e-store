'use client'
import { getProductsByPage } from '../../services';
import { Chart } from '../../components/Charts';
import { MobileProductsOverview, NavbarDashboard, TableProductsOverview } from '../../components';
import { Suspense } from 'react';

export const runtime = 'edge';

export default async function Dasboard() {
  
  const data = await getProductsByPage(80,1)
  const categoryCount = data.map((product) => product.category.name);
 
  const countOcurrences = (array: string[]) => array.reduce((prev: { [x: string]: number; }, current: string | number) => ((prev[current] = ++prev[current] || 1), prev), {});
 
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
      <div className='grid justify-center w-full'>
        <div className='self-center w-[320px] md:w-[600px] lg:w-full'>
          <Chart chartData={chartData} />

        </div>
     <Suspense>

        <TableProductsOverview data={data}/>
     </Suspense>

      </div>
      <Suspense>

      <MobileProductsOverview data={data}/>
      </Suspense>
    </>
  );
}
