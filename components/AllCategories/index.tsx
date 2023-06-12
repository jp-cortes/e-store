import clsx from 'clsx';
import Link from 'next/link';
import { Suspense } from 'react';
import { getCategories } from '../../services';


const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded';
const activeAndTitles = 'bg-red-800 dark:bg-gray-300';
const items = 'bg-red-400 dark:bg-gray-700';

async function Categories() {
    const categories = await getCategories()
    // console.log(categories)
    return(
        <div className='md:flex md:flex-start md:flex-col md:mx-6 hidden'>
          <h2 className='font-semibold capitalize'>Categories</h2>
        {categories.map((category) => (
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
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-full w-full flex-none py-4 pl-10 lg:block ">
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
        </div>
      }
    >
   <Categories/>
    </Suspense>
  );
}