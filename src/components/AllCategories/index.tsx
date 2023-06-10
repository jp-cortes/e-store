import clsx from 'clsx';
import Link from 'next/link';
import { Suspense } from 'react';



const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded';
const activeAndTitles = 'bg-gray-800 dark:bg-gray-300';
const items = 'bg-gray-400 dark:bg-gray-700';
const linksCategories = [
    {
        "id": 1,
        "name": "beauty",
        "image": "https://loremflickr.com/640/480?lock=1660913964810240",
        "createdAt": "2023-06-06T18:02:00.122Z"
    },
    {
        "id": 2,
        "name": "industrial",
        "image": "https://loremflickr.com/640/480?lock=7498795975704576",
        "createdAt": "2023-06-06T18:02:13.817Z"
    },
    {
        "id": 3,
        "name": "automotive",
        "image": "https://loremflickr.com/640/480?lock=8259590368002048",
        "createdAt": "2023-06-06T18:02:29.111Z"
    },
    {
        "id": 4,
        "name": "sports",
        "image": "https://loremflickr.com/640/480?lock=3386693432377344",
        "createdAt": "2023-06-06T18:02:39.707Z"
    },
    {
        "id": 5,
        "name": "outdoors",
        "image": "https://picsum.photos/seed/uulOEBR9/640/480",
        "createdAt": "2023-06-06T18:02:51.803Z"
    },
    {
        "id": 6,
        "name": "home",
        "image": "https://picsum.photos/seed/ECaaPtuKUH/640/480",
        "createdAt": "2023-06-06T18:03:02.451Z"
    },
    {
        "id": 7,
        "name": "health",
        "image": "https://picsum.photos/seed/ODFFhPhMP/640/480",
        "createdAt": "2023-06-06T18:03:13.949Z"
    },
    {
        "id": 8,
        "name": "computers",
        "image": "https://loremflickr.com/640/480?lock=7399595120263168",
        "createdAt": "2023-06-06T18:03:25.020Z"
    },
    {
        "id": 9,
        "name": "games",
        "image": "https://picsum.photos/seed/a7Wyz3mg87/640/480",
        "createdAt": "2023-06-06T18:03:34.598Z"
    },
    {
        "id": 10,
        "name": "electronics",
        "image": "https://loremflickr.com/640/480?lock=8259590368002048",
        "createdAt": "2023-06-06T18:03:51.213Z"
    }
];

const Categories = () => {
    return(
        <div className='flex flex-start flex-col'>
        {linksCategories.map((category) => (
            <Link key={category.id} href={`categories/${category.name}`}>
                {category.name}
            </Link>
        ))}
        </div>
    );

}

export const AllCategories = () => {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 pl-10 lg:block">
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