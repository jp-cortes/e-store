'use client'
import { useRouter } from "next/navigation";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { ErrorText } from "../../components";
import { SignupValues, signUpValuesSchema } from "../../utils/schemas/customer";
import Image from "next/image";
import loginBanner from '../../public/login_banner.jpg';
import Link from "next/link";
import { createCustomer } from "../../services/queries/customers";


export default function SignUp() {
  const router = useRouter();

  const { 
     register,
     handleSubmit,
     formState: { errors, isSubmitting } } = useForm<SignupValues>({
    resolver: zodResolver(signUpValuesSchema)
  })
  
  async function handleForm (newUser:NewCustomer) {
    
    
    try {
      await createCustomer(newUser);
      console.log(newUser)
      await new Promise((resolve) => setTimeout(resolve,5000));
      
      // console.log('done')
    router.push('/login');

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
      <div className="mt-[100px] md:mt-0  h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h1 className="lg:hidden  mx-auto font-bold text-3xl text-center">
            E-store
          </h1>
          <div>
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
              Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit((data) => handleForm(data))}>
            <div className="grid gap-2 rounded-md shadow-sm -space-y-px">
              <div className="flex gap-2">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input {...register('name')}
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                
                />
                <ErrorText>{errors.name?.message}</ErrorText>
                <label htmlFor="lastName" className="sr-only">
                  Lastname
                </label>
                <input {...register('lastName')}
                  name="lastName"
                  type="text"
                  autoComplete="lastName"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Lastname"
                  
                />
                <ErrorText>{errors.lastName?.message}</ErrorText>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phonenumber
                </label>
                <input {...register('phone')}
                  name="phone"
                  type="number"
                  autoComplete="phonenumber"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="PhoneNumber"
                  
                />
                <ErrorText>{errors.phone?.message}</ErrorText>
              </div>
              <div>
                <label htmlFor="user.email" className="sr-only">
                  Email address
                </label>
                <input {...register('user.email')}
                  name="user.email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                <ErrorText>{errors.user?.email?.message}</ErrorText>
              </div>
              <div>
                <label htmlFor="user.password" className="sr-only">
                  Password
                </label>
                <input {...register('user.password')}
                  name="user.password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  
                />
                <ErrorText>{errors.user?.password?.message}</ErrorText>
              </div>
              <div>
                <label htmlFor="user.confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input {...register('user.confirmPassword')}
                  name="user.confirmPassword"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password"
                  
                />
                <ErrorText>{errors.user?.confirmPassword?.message}</ErrorText>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-600 disabled:opacity-50"
                disabled={isSubmitting}
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
  

