'use client'
import { Suspense } from 'react';
import { getCategories } from '../services';
import { useFetch } from '../hooks/pagination';
import { CategoriesSkeleton } from './Skeletons/CategoriesSkeleton'
import Link from 'next/link';


async function fetchProductsByCategory(page: number) {
  const response = await getCategories();
  return response;
}

function Categories() {


const { data, isLoading } = useFetch({ query: ['all_categories'], queryFunction: fetchProductsByCategory })
const  categories = data?.pages.flatMap((product) => product);



  return(
    <div className='hidden md:flex md:flex-start md:flex-col md:mx-6 border-r-4 border-borderGreen'>
          <h2 className='font-semibold capitalize text-2xl mr-4'>Categories</h2>
        <ul className='grid justify-center gap-2'>
        {categories?.map((category: Category) => (
           <li key={category.id}
           className='mt-4 font-semibold capitalize'
           >
             <Link 
             className='px-3 py-3 border-transparent border-2 w-[100px] rounded-md hover:bg-hoverGreen hover:text-lightGreen transition-colors duration-500'
             href={`/categories/${category.id}/${category.name}`}>
                  {category.name}
              </Link>
           </li>
          
          ))}
          {isLoading && <CategoriesSkeleton/>}
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