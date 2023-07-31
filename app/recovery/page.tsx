'use client'

import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { ErrorText } from "../../components";
import { useRouter } from "next/navigation";
import { ResetPasswordValue, resetPasswordSchema } from "../../utils/schemas/customer";
import { updateUserPassword } from "../../services";
import Link from "next/link";
import Swal from 'sweetalert2';

export default function RecoveryPassword({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  //state
  const [passwordChanged, setPasswordChanged] = useState(false);

  const recoveryToken = searchParams.token as string;
 
  const router = useRouter();

  const { 
    register,
    handleSubmit,
    formState: { errors, isSubmitting } } = useForm<ResetPasswordValue>({
   resolver: zodResolver(resetPasswordSchema)
 })


  async function handleChangePassword (data: {
    password: string;
    confirmPassword: string;
}) {
   

   try {
    await updateUserPassword({newPassword: data.password, token: recoveryToken });
    
    setPasswordChanged(true);
    
    await new Promise((resolve) => setTimeout(resolve,5000));
    
    router.push('/login');
    
   } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops... Something went wrong!',
      text: 'Try again'
    })
   }


 


  
 

  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Link href='/' className='hidden lg:block absolute top-4 left-4 text-2xl text-black font-semibold hover:underline underline-offset-4'>E-store</Link>
        <div className="max-w-md w-full space-y-8">
            <h1 className="lg:hidden  mx-auto font-bold text-3xl text-center">E-store</h1>
          <div>
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">Change your password</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit((data) => handleChangePassword(data))}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input {...register('password')}
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mb-2"
                  placeholder="New password"
                />
                <ErrorText>{errors.password?.message}</ErrorText>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Verify Password
                </label>
                <input {...register('confirmPassword')}
                  name="confirmPassword"
                  type="password"
                  autoComplete="password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Verify password"
                />
                <ErrorText>{errors.confirmPassword?.message}</ErrorText>
              </div>
             
            </div>


            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                Update Password
              </button>
            </div>
          </form>
          {
          passwordChanged 
          && <p className="text-center text-lg font-semibold text-green-700 animate-pulse">
            Password updated successfully! Please Login to your account</p>
            }
         
     </div>
      </div>
  )
}
