
import { Suspense } from 'react';
import { getCategories } from '../../services';

import Link from 'next/link';



async function Categories() {

  const categories = await getCategories();

  return(
    <div className='md:flex md:flex-start md:flex-col md:mx-6 '>
          <h2 className='font-semibold capitalize text-2xl '>Categories</h2>
        <ul>
        {categories.map((category: Category) => (
           <li key={category.id}>
             <Link 
            className='mt-4 font-semibold capitalize focus:bg-green-700 focus:py-1 focus:text-white'
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