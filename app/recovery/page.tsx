'use client'

import { FormEvent, useRef, useState } from "react";
import { sendRecoveryEmail } from "../../services";
import { useRouter } from "next/navigation";

export default function RecoveryPassword() {
  //state
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [error, setError] = useState(false);
  
  //hooks
  const passwordRef = useRef(null);
  const VerifyPasswordRef = useRef(null);

  const router = useRouter();

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // @ts-ignore: Object is possibly 'null'.
    const password = passwordRef.current.value;
     // @ts-ignore: Object is possibly 'null'.
    const password2 = VerifyPasswordRef.current.value;

  //  try {
  //   await sendRecoveryEmail(email);
    
  //  } catch (error) {
  //   console.log(error);
  //  }


  if(password === password2) {


  setPasswordChanged(true);
  setTimeout(() => {
    router.push('/login');
  },2000) 
  } else {
    setError(true);
  }

  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <h1 className="lg:hidden  mx-auto font-bold text-3xl text-center">E-store</h1>
          <div>
            <h2 className="mt-6 text-center text-xl font-extrabold text-gray-900">Change your password</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="New password"
                  ref={passwordRef}
                />
              </div>
              <div>
                <label htmlFor="verify-password" className="sr-only">
                  Verify Password
                </label>
                <input
                  name="verify-password"
                  type="password"
                  autoComplete="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Verify password"
                  ref={VerifyPasswordRef}
                />
              </div>
             
            </div>


            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
          {
          error 
          && <p className="text-center text-lg font-semibold text-red-700 animate-pulse">
            Paswords do not match! Please try again</p>
            }
     </div>
      </div>
  )
}
