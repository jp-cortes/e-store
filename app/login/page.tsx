'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { ErrorText, MenuMobile } from "../../components";
import { useRouter } from 'next/navigation';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { loginUser } from '../../services';
import { LoginValues, loginValuesSchema } from '../../utils/schemas/customer';
import Swal from 'sweetalert2';
import Link from 'next/link';
import Image from 'next/image';
import loginBanner from '../../public/login_banner.jpg';

export const runtime = 'edge';

export default function Login() {
  const { 
    register,
    handleSubmit,
    formState: { errors, isSubmitting } } = useForm<LoginValues>({
   resolver: zodResolver(loginValuesSchema)
 })


const router = useRouter();

async function handleLogin (data: LoginValues ) {
const { email, password} = data;  
 try {
  await loginUser(email, password);

  router.push('/my-account');
  
  await new Promise((resolve) => setTimeout(resolve,5000));
  
 } catch (error) {
  Swal.fire({
    icon: 'error',
    title: 'Oops... Something went wrong!',
    text: 'Wrong email or password',
    confirmButtonColor: '#EB1D36'
  })
 }

}
return (
  <>
    <div className="relative grid h-auto grid-cols-1 mt-[-68px] md:grid-cols-2 md:overflow-y-hidden lg:overflow-y-hidden">
      <div className="absolute top-4 left-4">
        <MenuMobile />
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
          height={1000}
          alt="banner"
        />
      </div>
      <div className="mt-[60px] md:mt-0 lg:mt-[50px] h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <h1 className="lg:hidden  mx-auto font-bold text-3xl text-center">
            E-store
          </h1>
          <div>
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit((data) => handleLogin(data))}
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  {...register("email")}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="email@example"
                />
                <ErrorText>{errors.email?.message}</ErrorText>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  {...register("password")}
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
                <ErrorText>{errors.password?.message}</ErrorText>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-buttonGreen hover:text-hoverGreen"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-buttonGreen hover:bg-hoverGreen disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 bg-buttonGreen group-hover:text-hoverGreen group-hover:bg-hoverGreen"
                    aria-hidden="true"
                  />
                </span>
                Log in
              </button>
            </div>
          </form>
          <div className="inline-flex w-full justify-center items-center">
            <p>Don&apos;t have an account?</p>
            <Link
              href="/sign-up"
              className=" py-2 px-4  font-medium  text-buttonGreen  hover:text-hoverGreen hover:underline underline-offset-4"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);
}
