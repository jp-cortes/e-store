
import { Suspense } from 'react';
import { getCategories } from '../services';

import Link from 'next/link';



async function Categories() {

  const categories = await getCategories();

  return(
    <div className='hidden md:flex md:flex-start md:flex-col md:mx-6 '>
          <h2 className='font-semibold capitalize text-2xl '>Categories</h2>
        <ul className='grid justify-center gap-2'>
        {categories.map((category: Category) => (
           <li key={category.id}
           className='mt-4 font-semibold capitalize'
           >
             <Link 
             className='px-3 py-3 border-white dark:border-gray-900 border-2 w-[100px] rounded-md hover:bg-green-300  transition-colors duration-500'
             href={`/categories/${category.id}-${category.name}`}>
                  {category.name}
              </Link>
           </li>
          
          ))}
        </ul>
        </div>
    );
    
  }
  
export function AllCategories() {
  
  return (
    <Suspense>
       <Categories/>
    </Suspense>
  );
}