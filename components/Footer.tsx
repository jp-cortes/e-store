import Image from "next/image";
import Link from "next/link";



export function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');


  return (
    <footer className="border-t border-gray-400 bg-gray-800 text-white mt-10 ">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 border-b border-gray-400 py-12 transition-colors duration-150 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-3">
            <a className="flex flex-initial items-center font-bold md:mr-24" href="/">
              <span>E-store</span>
            </a>
          </div>
         
            <nav className="col-span-1 lg:col-span-7">
              <ul className="grid md:grid-flow-col md:grid-cols-3 md:grid-rows-4">
           
                  <li  className="py-3 md:py-0 md:pb-4">
                    <Link
                      href='/'
                      className="text-gray-100 transition duration-150 ease-in-out hover:text-gray-300 "
                    >
                      Home
                    </Link>
                  </li>
                  <li  className="py-3 md:py-0 md:pb-4">
                    <Link
                      href='/about'
                      className="text-gray-100 transition duration-150 ease-in-out hover:text-gray-300 "
                    >
                      About
                    </Link>
                  </li>
                  <li  className="py-3 md:py-0 md:pb-4">
                    <Link
                      href='/faq'
                      className="text-gray-100 transition duration-150 ease-in-out hover:text-gray-300 "
                    >
                      FAQ
                    </Link>
                  </li>
                  <li  className="py-3 md:py-0 md:pb-4">
                    <Link
                      href='/'
                      className="text-gray-100 transition duration-150 ease-in-out hover:text-gray-300 "
                    >
                      Blog
                    </Link>
                  </li>
              
              </ul>
            </nav>
          
          <div className="col-span-1  lg:col-span-2">
            <a aria-label="Github Repository" href="https://github.com/jp-cortes/e-store">
              <Image src='/github-icon.png' width={30} height={30} alt='github-icon'/>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between space-y-4 pb-10 pt-6 text-sm md:flex-row">
          
          <div className="flex items-center text-sm text-white ">
            <span className="text-white">Created by</span>
            <a
              rel="noopener noreferrer"
              href="https://jpcortes.dev"
              aria-label="Vercel.com Link"
              target="_blank"
              className="text-black dark:text-white"
            >
              <Image src='/jp.svg' width={30} height={30} alt='github-icon'/>
            </a>
          </div>
          <p>
            &copy; {copyrightDate} E-store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}