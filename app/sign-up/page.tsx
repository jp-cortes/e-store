'use client'
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { createCustomer } from "../../services/queries/customers";
import Image from "next/image";



type Props = {}

 export default function SignUp(props: Props) {
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
    // await createCustomer();
    router.push('/my-account');
   } catch (error) {
    console.log(error);
   }


  }
  return (
      
      
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <Image src='' width='100' height='100' alt=''/>
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
              <h1 className="lg:hidden  mx-auto font-bold text-3xl text-center">E-store</h1>
            <div>
              <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">Create your account</h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="grid gap-2 rounded-md shadow-sm -space-y-px">
                <div className='flex gap-2'>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Name"
                    ref={emailRef}
                  />
                  <label htmlFor="lastname" className="sr-only">
                    Lastname
                  </label>
                  <input
                    name="lastname"
                    type="text"
                    autoComplete="lastname"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Lastname"
                    ref={emailRef}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phonenumber
                  </label>
                  <input
                    name="phone"
                    type="number"
                    autoComplete="phonenumber"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="PhoneNumber"
                    ref={emailRef}
                  />
                </div>
                <div>
                  <label htmlFor="avatar" className="sr-only">
                    Avatar
                  </label>
                  <input
                    name="avatar"
                    type="file"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    ref={emailRef}
                  />
                </div>
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
                <div>
                  <label htmlFor="confirm-password" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    name="confirm-password"
                    type="password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                    ref={passwordRef}
                  />
                </div>
              </div>
  
  
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  
                  Sign up
                </button>
              </div>
            </form>
            <button
          onClick={() => router.push('/login')}
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md bg-white text-green-500 border-green-500 hover:border-green-700  hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              
                Log in
              </button>
       </div>
        I</div>
      </div>
      
      
    )
  }
  

