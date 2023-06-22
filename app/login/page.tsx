'use client'
import { FormEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { loginUser } from '../../services';
import Link from 'next/link';

type Props = {}

export default function Login(props: Props) {
const emailRef = useRef(null);
const passwordRef = useRef(null);

const router = useRouter();

async function handleSubmit (e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  // @ts-ignore: Object is possibly 'null'.
  const email = emailRef.current.value;
  // @ts-ignore: Object is possibly 'null'.
  const password = passwordRef.current.value;

 try {
  await loginUser(email, password);
  router.push('/');
 } catch (error) {
  console.log(error);
 }
  // console.log(email, password);// todo create login
}
return (
    
    
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <h1 className="lg:hidden  mx-auto font-bold text-3xl text-center">E-store</h1>
          <div>
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">Sign in to your account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/reset" className="font-medium text-green-700 hover:text-green-600">
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-green-500 group-hover:text-green-400" aria-hidden="true" />
                </span>
                Log in
              </button>
            </div>
          </form>
          <button
          onClick={() => router.push('/sign-up')}
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md bg-white text-green-500 border-green-500 hover:border-green-700  hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              
                Sign Up
              </button>
                  {/* {auth.error ? 
                <div className='pt-4 pb-4 mb-4 flex justify-center bg-red-300 rounded'>
                  <span className='font-bold'>
                    Login failed! {auth.error}
                    </span>
                </div> : null
                  } */}
     </div>
      </div>
    
    
  )
}





// export default function Login(props: Props) {

//   return (
    
    
      
//   )
// }