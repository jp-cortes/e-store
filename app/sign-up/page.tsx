'use client'
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { createCustomer } from "../../services/queries/customers";
import Image from "next/image";
import loginBanner from '../../public/login_banner.jpg';
import Link from "next/link";


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
    <div className="relative mt-[-68px] grid grid-cols-1 md:grid-cols-2">
      <Link
        href="/"
        className="hidden md:block absolute top-4 left-4 text-2xl text-white font-semibold hover:underline underline-offset-4"
      >
        E-store
      </Link>
      <div className="hidden w-full md:block md:col-start-1 md:col-end-2 ">
        <Image
          className="w-full h-[100vh]"
          src={loginBanner}
          quality={100}
          width={800}
          height={800}
          alt="banner"
        />
      </div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h1 className="lg:hidden  mx-auto font-bold text-3xl text-center">
            E-store
          </h1>
          <div>
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
              Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-2 rounded-md shadow-sm -space-y-px">
              <div className="flex gap-2">
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

          <div className="inline-flex w-full justify-center items-center">
            <p>Already have an account?</p>
            <Link
              href="/login"
              className=" py-2 px-4  font-medium  text-green-500  hover:text-green-700 hover:underline underline-offset-4"
            >
              Log in
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
  }
  

