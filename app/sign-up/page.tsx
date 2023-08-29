'use client'
import { useRouter } from "next/navigation";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { ErrorText, MenuMobile } from "../../components";
import { SignupValues, signUpValuesSchema } from "../../utils/schemas/customer";
import { createCustomer } from "../../services";
import Image from "next/image";
import Link from "next/link";
import loginBanner from '../../public/login_banner.jpg';
import Swal from 'sweetalert2'

export const runtime = 'edge';

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
      await new Promise((resolve) => setTimeout(resolve,5000));
      
      Swal.fire({
        title:'Account have been created successfully!',
        text:'Login now to start shopping',
        icon:'success',
        confirmButtonColor: '#7BC74D'
      })

    router.push('/login');

   } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops... Something went wrong!',
      text: 'Please review your info and try again',
      confirmButtonColor: '#EB1D36'
    })
   }


  }
  return (
    <div className="relative h-auto mt-[-68px] grid grid-cols-1 md:grid-cols-2 md:overflow-y-hidden lg:overflow-y-hidden">
      <div className='absolute top-4 left-4'>
  <MenuMobile/>
  </div>
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
      <div className="mt-[60px] md:mt-0 lg:mt-[50px] h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
                className="relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-buttonGreen hover:bg-hoverGreen disabled:opacity-50 disabled:cursor-not-allowed"
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
  

