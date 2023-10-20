'use client'
import Cookie from 'js-cookie';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { UserIcon } from '@heroicons/react/24/outline';


export function MenuUserloggedIn() {

// handle user log out 
function handleLogout() {

  Cookie.remove('token');
  Cookie.remove('userRole');
  
 location.reload();// will reload the page and redirect the user to the login page
}

  return (
    <NavigationMenu.Root className="relative w-[100px] flex justify-center items-center">
      <NavigationMenu.List className="flex justify-center items-center w-6 h-6 list-none bg-lightGreen m-0 rounded-md p-[5px] ">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="flex select-none justify-between gap-[2px] rounded-lg p-1 text-[15px] font-medium leading-none outline-none z-10">
            <UserIcon className='w-6 h-6'/>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className=" bg-lightGreen absolute top-0  w-full left-[-2px] sm:w-auto shadow-[0px_40px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <ul className="flex flex-col w-full list-none gap-2 h-auto">
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    className="focus:shadow-[0_0_0_2px] focus:shadow-green-200 hover:bg-purple-100 select-none rounded-[6px] p-2 text-[15px] leading-none no-underline outline-none transition-colors inline-block"
                    href="/my-account"
                  >
                      My account
                  </Link>
                </NavigationMenu.Link>
              </li>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    href="/my-orders"
                    className="focus:shadow-[0_0_0_2px] focus:shadow-green-200 hover:bg-purple-100 select-none rounded-[6px] p-2 text-[15px] leading-none no-underline outline-none transition-colors inline-block"
                  >
                   
                    My orders
            
                  </Link>
                </NavigationMenu.Link>
              </li>
            <li>
              <NavigationMenu.Link>

            <button
        className='w-24  p-1 md:p-2 lg:p-2 bg-buttonGreen hover:bg-hoverGreen text-white font-semibold rounded-md inline-block m-1 '
        onClick={handleLogout}
        type='button'
        >Log out</button>
        </NavigationMenu.Link>
            </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-lightGreen transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};


