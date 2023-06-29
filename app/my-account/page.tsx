
'use client'
import Cookie  from 'js-cookie';
import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from "next/navigation";
import { UpdateCustomer, getCustomerbyId } from "../../services";
import { useRef, useState } from "react";
import { Navbar } from '../../components/Navbar';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdateValues, updateValuesSchema } from '../../utils/schemas/customer';



export default async function MyAccount() {
const inputUpdateAvatar = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<Blob | string>('');// user image or avatar

  const { 
    register,
    handleSubmit,
    formState: { errors, isSubmitting } } = useForm<UpdateValues>({
   resolver: zodResolver(updateValuesSchema)
  })

//cookies
  const userId = Cookie.get('userId');
  const token = Cookie.get('token');
  const router = useRouter();

 

  // render the user info
  const user = await getCustomerbyId(`${userId}`);
  
  // handle user log out 
 function handleLogout() {
        //delete the token stored in cookies
      // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
      document.cookie='token=deleted;' + "path=/; expires=" + new Date(0).toUTCString();
      document.cookie='userId=deleted;' + "path=/; expires=" + new Date(0).toUTCString();
      
     return location.reload();// then will reload retun the user to the login page
 }



 async function handleUpdate(updatedUser: UpdateValues) {

    try {   
      const data = new FormData();
      data.append("file", inputUpdateAvatar);
      data.append("upload_preset", "e_store");
      if(!data) {
        //if data is not an empty object
        //mean if there is a new image will be updated
        const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
          method: 'POST',
          body: data
        });
        
        const dataFromCloud = await response.json();
        console.log(dataFromCloud, 'uploaded image');
    
      const { url } = dataFromCloud;
      updatedUser.avatar  = url;
    
    }
    //  if there is no new image will be the same by default
    // await UpdateCustomer(`${userId}`, updatedUser)// Todo review logic of updated user
      // location.reload();//reload the page if the product is updated
    
  } catch (error) {
    console.log(error);
  }

}
  // if there is no token will re direct to login page
  if(!token) {
    return router.push('/login');
  }

  return (
 <>
    <Navbar />
    <div className='relative grid grid-col-1 place-content-center '>
        <button
        className=' absolute right-4 w-32 p-2 bg-green-400 text-white font font-semibold rounded-md'
        onClick={handleLogout}
        type='button'
          >Log out</button>
          
      <h1 className='text-2xl font-semibold text-center'>Account</h1>

      <div className=' my-8 mx-auto'>
      <h2 className='font-normal capitalize'>Hi, {user.name}</h2>
        <div className=' gap-4'>
          { user.avatar ? <figure className='my-5'>
            <Image className='rounded-full'
            src={user.avatar} 
            width={80}
            height={80}
            alt='user-avatar'/>
          </figure> : 
          <div className='bg-purple-600 w-[80px] h-[80px] rounded-full flex justify-center items-center my-5'>
            <p className='text-3xl text-white capitalize'>{(user.name).slice(0,1)}</p>
            </div>}
          <div className=''>
            <p className='my-5 font-light text-gray-700 capitalize'><b>Name: </b>{user.name}</p>
            <p className='my-5 font-light text-gray-700 capitalize'><b>Lastname: </b>{user.lastName}</p>
            <p className='my-5 font-light text-gray-700 capitalize'><b>Phone number: </b>{user.phone}</p>
          </div>
        
        </div>
      </div>

      <Dialog.Root>
      <Dialog.Trigger>
        <button className="fixed right-3 top-[120px] rounded-md font-semibold textlg bg-gray-500 text-white px-4 py-2">
          Edit my profile
        </button>
      </Dialog.Trigger>
      <Dialog.Overlay className="bg-background/80 data-[state=open] fixed top-0 inset-0 grid grid-cols-1 place-content-center" />
      <Dialog.Content className="data-[state=open] w-full  translate-y-[-70%] rounded-[6px] md:col-start-1 md:col-end-2">
        
      
      <div className='bg-white  rounded-xl p-2 md:p-5'>
   
        <form
        className='w-[320px] md:w-[400px] grid justify-center'
        onSubmit={handleSubmit((data) => handleUpdate(data))}>
          <div className='flex flex-col justify-center '>
          <label htmlFor='avatar'>Avatar</label>
         <input className='my-4' type='file' placeholder='Upload a Picture' name='avatar'
         ref={inputUpdateAvatar}
         />
            <label htmlFor='name'>Name</label>
            <input {...register('name')}
            name='name'
            className='my-4 w-40 border-2 border-gray-600 pl-2 py-2 rounded-lg font-light text-black focus:outline-emerald-500 focus:outline-2'
            defaultValue={user.name}/>

            <label htmlFor='lastname'>LastName</label>
            <input {...register('lastName')}
            name='lastname' className='my-4 w-40 border-2 border-gray-600 pl-2 py-2 rounded-lg font-light text-black focus:outline-emerald-500 focus:outline-2'
            defaultValue={user.lastName}/>

            <label htmlFor='phone'>Phone Number</label>
            <input {...register('phone')}
            name='phone'
            className='my-4 w-40 border-2 border-gray-600 pl-2 py-2 rounded-lg font-light text-black focus:outline-emerald-500 focus:outline-2' 
            defaultValue={user.phone}/>
          </div>
         <div 
         className='flex'>
          <Dialog.Close asChild>
           <button className='w-32 p-2 bg-red-500 mx-4 rounded-md text-white font-semibold'
           onClick={() => {}}
           type='button'
           >Cancel</button>
           </Dialog.Close>
         
         <button
         className='w-32 p-2 bg-green-400 mx-4 rounded-md font-semibold'
          type='submit'
          >Edit</button>
         </div>
        </form>
      </div>
      </Dialog.Content>
    </Dialog.Root>


    </div>
    
  </>
  )
}


