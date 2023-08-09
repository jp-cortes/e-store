'use client'
import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { RecoveryEmailValue, recoveryEmailSchema } from '../../utils/schemas/customer';
import { sendRecoveryEmail } from "../../services";
import { useRouter } from "next/navigation";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { ErrorText } from "../../components";
import Swal from 'sweetalert2';
import Link from "next/link";

export default function ResetPassword() {
  const [emailSent, setEmailSent] = useState(false);
 

  const router = useRouter();

  const { 
    register,
    handleSubmit,
    formState: { errors, isSubmitting } } = useForm<RecoveryEmailValue>({
   resolver: zodResolver(recoveryEmailSchema)
 })

  async function handleSubmitEmail (data: { email: string }) {
  
   try {
    await sendRecoveryEmail(data.email);
    
    setEmailSent(true);
    
    await new Promise((resolve) => setTimeout(resolve,5000));

    router.push('/login');

   } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops... Something went wrong!',
      text: 'Try again',
      confirmButtonColor: '#EB1D36'
    })
   }
    
  

  }
  return (
    <div className=" min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="hidden lg:block absolute top-4 left-4 text-2xl text-black font-semibold hover:underline underline-offset-4"
      >
        E-store
      </Link>
      <div className="max-w-md w-full space-y-8">
        <h1 className="lg:hidden  mx-auto font-bold text-3xl text-center">
          E-store
        </h1>
        <div>
          <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">
            Forgot your password?
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit((data) => handleSubmitEmail(data))}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div className={`${emailSent ? "hidden" : "block"}`}>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                {...register("email")}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="email@example"
              />
              <ErrorText>{errors.email?.message}</ErrorText>
            </div>
          </div>

          <div className={`${emailSent ? "hidden" : "block"}`}>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              Send Email
            </button>
          </div>
        </form>
        <div
          className={`${
            emailSent ? "grid" : "hidden"
          } w-32 h-32 rounded-full bg-gray-200 mx-auto place-content-center`}
        >
          <EnvelopeIcon className=" h-20 w-20" />
        </div>
        {emailSent && (
          <p className="text-center text-lg font-semibold text-green-700 animate-pulse">
            Email have been successfully sent! <br /> Please Verify your inbox
            or spam folder
          </p>
        )}
      </div>
    </div>
  );
}
