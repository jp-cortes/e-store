'use client'
import { Bars3BottomLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { useState } from 'react';




export function MenuMobile() {
  //state to close the  menu
  const [open, setOpen] = useState(false); 

const categories = [
    {
      id: 1,
      name: "automotive"
    },
    {
      id: 2,
      name: "sports"
    },
    {
      id: 3,
      name: "health"
    },
    {
      id: 4,
      name: "computers"
    },
    {
      id: 5,
      name: "games"
    },
    {
      id: 6,
      name: "furniture"
    },
    {
      id: 7,
      name: "industrial"
    },
    {
      id: 8,
      name: "home"
    },
    {
      id: 9,
      name: "beauty"
    }
  ]

  return (
    <div className=" flex md:hidden lg:hidden">
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger className="flex select-none justify-between gap-[2px] rounded-lg p-1 text-[15px] font-medium leading-none outline-none z-10">
          <Bars3BottomLeftIcon className="w-6 h-6" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="absolute top-2 left-[-28px] w-[120px] sm:w-auto z-20 rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] bg-lightGreen">
            <div className="flex flex-col w-full list-none gap-2">
              
                <DropdownMenu.Item className='focus:shadow-[0_0_0_2px] focus:shadow-green-200 hover:bg-hoverGreen hover:text-lightGreen select-none rounded-[6px] p-2 text-[15px] leading-none no-underline outline-none transition-colors inline-block capitalize'>
                  <Link 
                  onClick={()=> setOpen(false)}
                  href="/">Home</Link>
                </DropdownMenu.Item>
              
            
                <DropdownMenu.Item  className="focus:shadow-[0_0_0_2px] focus:shadow-green-200 hover:bg-hoverGreen hover:text-lightGreen select-none rounded-[6px] p-2 text-[15px] leading-none no-underline outline-none transition-colors inline-block capitalize">
                  <Link 
                  onClick={()=> setOpen(false)}
                  href="/categories">All Products</Link>
                </DropdownMenu.Item>
                
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>
                  <div className="flex content-center gap-2 p-2">
                    Categories
                    <ChevronRightIcon className="w-4 h-4 mt-2" />
                  </div>
                </DropdownMenu.SubTrigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.SubContent
                    className="min-w-[150px] bg-lightGreen hover:bg-hoverGreen hover:text-lightGreen rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
                    sideOffset={2}
                    alignOffset={-5}
                  >
                    {categories.map((category) => (
                
                        <DropdownMenu.Item key={category.id}>
                          <Link
                            className="w-full hover:bg-hoverGreen hover:text-lightGreen  rounded-[6px] p-2 text-[15px] leading-none no-underline outline-none transition-colors inline-block capitalize"
                            href={`/categories/${category.id}/${category.name}`}
                            onClick={()=> setOpen(false)}
                          >
                            {category.name}
                          </Link>
                        </DropdownMenu.Item>
                     
                    ))}
                  </DropdownMenu.SubContent>
                </DropdownMenu.Portal>
              </DropdownMenu.Sub>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

