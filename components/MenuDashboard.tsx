'use client'
import Cookie from 'js-cookie';
import { UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';


export function MenuDashboard() {

// handle user log out 
function handleLogout() {

  Cookie.remove('token');
  Cookie.remove('userId');

 location.reload();// then will reload retun the user to the login page
}

  return (
    <NavigationMenu.Root className="relative w-[100px] flex justify-center items-center">
      <NavigationMenu.List className="flex justify-center items-center w-6 h-6 list-none rounded-full bg-white m-0 p-1">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex select-none justify-between gap-[2px] rounded-lg p-1 text-[15px] font-medium leading-none outline-none z-10">
            <UserIcon className='w-6 h-6'/>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className=" absolute top-0 left-0 w-full sm:w-auto">
            <ul className="flex flex-col w-full list-none gap-2">
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/dashboard"
                    className="focus:shadow-[0_0_0_2px] focus:shadow-green-200 hover:bg-purple-100 select-none rounded-[6px] p-2 text-[15px] leading-none no-underline outline-none transition-colors inline-block"
                  >
                    <div className=" mb-[5px] font-medium leading-[1.2]">
                      Dashboard
                    </div>
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/dashboard/products"
                    className="focus:shadow-[0_0_0_2px] focus:shadow-green-200 hover:bg-purple-100 select-none rounded-[6px] p-2 text-[15px] leading-none no-underline outline-none transition-colors inline-block"
                  >
                    <div className=" mb-[5px] font-medium leading-[1.2]">
                    Products
                    </div>
                  </Link>
                </NavigationMenu.Link>
              </li>
              <button
        className='w-20 md:w-24 px-1 md:p-2 bg-green-400 text-white font font-semibold rounded-md'
        onClick={handleLogout}
        type='button'
          >Log out</button>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};


