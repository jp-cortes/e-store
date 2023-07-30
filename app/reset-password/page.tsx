'use client'

import { FormEvent, useRef, useState } from "react";
import { sendRecoveryEmail } from "../../services";
import { useRouter } from "next/navigation";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Swal from 'sweetalert2';

export default function ResetPassword() {
  const [emailSent, setEmailSent] = useState(false);
  const emailRef = useRef(null);

  const router = useRouter();

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // @ts-ignore: Object is possibly 'null'.
    const email = emailRef.current.value;

   try {
    await sendRecoveryEmail(email);
    setEmailSent(true);
    router.push('/login')
   } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops... Something went wrong!',
      text: 'Try again'
    })
   }
    
  

  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <h1 className="lg:hidden  mx-auto font-bold text-3xl text-center">E-store</h1>
          <div>
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">Forgot your password?</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className={`${emailSent ? 'hidden' : 'block'}`}>
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
             
            </div>


            <div className={`${emailSent ? 'hidden' : 'block'}`}>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Email
              </button>
            </div>
          </form>
          <div className={`${emailSent ? 'grid' : 'hidden'} w-32 h-32 rounded-full bg-gray-200 mx-auto place-content-center`}>
          <EnvelopeIcon className=" h-20 w-20"/>
          </div>
          {
          emailSent 
          && <p className="text-center text-lg font-semibold text-green-700 animate-pulse">
            Email Sent successfully! <br/> Please Verify your inbox or spam folder
            </p>
            }
     </div>
      </div>
  )
}
