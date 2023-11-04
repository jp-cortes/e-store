'use client'

 
import { usePathname } from 'next/navigation'
import { Suspense } from 'react';
import { getCategories } from '../services';
import { useFetch } from '../hooks/pagination';
import { CategoriesSkeleton } from './Skeletons/CategoriesSkeleton'
import Link from 'next/link';


async function fetchProductsByCategory() {
  const response = await getCategories();
  return response;
}

function Categories() {
  const pathname = usePathname();

  // hook
const { data, isLoading } = useFetch({ query: ['all_categories'], queryFunction: fetchProductsByCategory })
// data is return as an array of arrays
// the flatMap will retun one array of categories
const  categories = data?.pages.flatMap((category: Category[]) => category);



  return(
    <div className='hidden md:flex md:justify-center  md:flex-col md:mr-6 border-r-4 border-borderGreen'>
          <h2 className='font-semibold capitalize text-2xl mx-4'>Categories</h2>
        <ul className=' mt-4 grid justify-center gap-1'>
        {categories?.map((category) => (
           <li key={category.id}
           className=' font-semibold capitalize'
           >
             <Link 
             className={`${pathname === `/categories/${category.id}/${category.name}` && ' bg-hoverGreen text-lightGreen' } 
             inline-block p-3 border-transparent border-2 w-full rounded-md hover:bg-hoverGreen hover:text-lightGreen transition-colors duration-500`}
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