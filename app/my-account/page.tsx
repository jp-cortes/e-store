
'use client'

import { Navbar } from '../../components';
import { getCustomerbyId } from "../../services";
import { UpdateUserInfo } from '../../components/Forms';
import { Suspense } from 'react';
import { DefaultAvatar } from '../../components';
import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';



export default async function MyAccount() {
 
  const user: Customer = await getCustomerbyId();
  
  return (
    <>
      <Navbar />
      <Suspense>
        <div className="relative grid grid-col-1 place-content-center ">
          <h1 className="text-2xl font-semibold text-center">Account</h1>

          <div className=" my-8 mx-auto">
            <h2 className="font-normal capitalize">Hi, {user?.name}</h2>
            <div className=" gap-4">
              {user?.avatar ? (
                <figure className="my-5">
                  <Image
                    className="rounded-full"
                    src={user?.avatar}
                    width={80}
                    height={80}
                    alt="user-avatar"
                  />
                </figure>
              ) : (
                <DefaultAvatar userName={user?.name} bgColor="bg-purple-600" />
              )}
              <div className="">
                <p className="my-5 font-light text-gray-700 capitalize">
                  <b>Name: </b>
                  {user?.name}
                </p>
                <p className="my-5 font-light text-gray-700 capitalize">
                  <b>Lastname: </b>
                  {user?.lastName}
                </p>
                <p className="my-5 font-light text-gray-700 capitalize">
                  <b>Phone number: </b>
                  {user?.phone}
                </p>
              </div>
            </div>
          </div>

          <Dialog.Root>
            <Dialog.Trigger>
              <button className="mx-auto rounded-md font-semibold textlg bg-gray-500 text-white px-4 py-2">
                Edit my profile
              </button>
            </Dialog.Trigger>
            <Dialog.Overlay className="bg-background/80 data-[state=open] fixed top-0 inset-0 grid grid-cols-1 place-content-center" />
            <Dialog.Content className="data-[state=open] w-full  translate-y-[-90%] rounded-[6px] md:col-start-1 md:col-end-2">
              <div className="bg-white  rounded-xl p-2 md:p-5">
                <UpdateUserInfo user={user} />
              </div>
            </Dialog.Content>
          </Dialog.Root>
        </div>
      </Suspense>
    </>
  );
}


