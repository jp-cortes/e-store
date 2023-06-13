import { Suspense } from 'react';
import { getCategories } from '../../services';
import clsx from 'clsx';
import Link from 'next/link';



async function Categories() {
  const categories = await getCategories();

  // console.log(categories)
  
  return(
    <div className='md:flex md:flex-start md:flex-col md:mx-6 hidden'>
          <h2 className='font-semibold capitalize text-2xl '>Categories</h2>
        {categories.map((category: Category) => (
            <Link 
            className='mt-4 font-semibold capitalize'
            key={category.id} href={`/categories/${category.name}`}>
                  {category.name}
              </Link>
          
          ))}
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