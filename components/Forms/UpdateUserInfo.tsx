
'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdateValues, updateValuesSchema } from '../../utils/schemas/customer';
import { ErrorText } from '../ErrorText';
import * as Dialog from '@radix-ui/react-dialog';
import { UpdateCustomer } from '../../services';


export function UpdateUserInfo({ user }: { user: Customer}) {
 

  const { 
    register,
    handleSubmit,
    formState: { errors, isSubmitting } } = useForm<UpdateValues>({
   resolver: zodResolver(updateValuesSchema)
  })



 async function handleUpdate(updatedUser: Customer | UpdateValues) {

const file: File | string = updatedUser.avatar[0];
    try {   
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "e_store");
      if(data !== null) {
        // if data is not an empty object
        // mean if there is a new image will be updated
        const response = await fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
          method: 'POST',
          body: data
        });
        
        const dataFromCloud = await response.json();
 
      const { url }: { url: string} = dataFromCloud;
      updatedUser.avatar  =`${url}`;

      
    } 
    await UpdateCustomer(`${user.id}`, updatedUser)// Todo review logic of updated user

    await new Promise((resolve) => setTimeout(resolve,5000));

    location.reload();//reload the page if the product is updated
    console.log('done');
  } catch (error) {
    console.log(error);
  }


}
 

  return (
        <form
        onSubmit={handleSubmit((data) => handleUpdate(data))}
        className='w-[320px] md:w-[400px] grid justify-center'>
          <div className='flex flex-col justify-center '>
          <label htmlFor='avatar'>Avatar</label>
         <input 
         {...register('avatar')}
         className='my-4' type='file' placeholder='Upload a Picture' name='avatar'
         />
          {/* <ErrorText>{errors.avatar?.message}</ErrorText> */}

            <div className='my-4 '>
            <label className="sr-only" htmlFor='name'>Name</label>
            <input {...register('name')}
            name='name'
            className=' w-40 border-2 border-gray-600 pl-2 py-1 rounded-lg font-light text-black focus:outline-emerald-500 focus:outline-2'
            defaultValue={user.name}
            />
            <ErrorText>{errors.name?.message}</ErrorText>
            </div>

            <div className='my-4 '>
            <label className="sr-only" htmlFor='lastName'>LastName</label>
            <input {...register('lastName')}
            name='lastName' className='w-40 border-2 border-gray-600 pl-1 py-2 rounded-lg font-light text-black focus:outline-emerald-500 focus:outline-2'
            defaultValue={user.lastName}
            />
            <ErrorText>{errors.lastName?.message}</ErrorText>
            </div>

            <div className='my-4 '>
            <label className="sr-only" htmlFor='phone'>Phone Number</label>
            <input {...register('phone')}
            name='phone'
            className=' w-40 border-2 border-gray-600 pl-2 py-1 rounded-lg font-light text-black focus:outline-emerald-500 focus:outline-2' 
            defaultValue={user.phone}
            />
            <ErrorText>{errors.phone?.message}</ErrorText>
            </div>
          </div>
         <div 
         className='flex'>      
         <Dialog.Close asChild>
           <button 
           disabled={isSubmitting}
           className='w-32 p-2 bg-red-500 mx-4 rounded-md text-white font-semibold disabled:opacity-50'
           type='button'
           >Cancel</button>
           </Dialog.Close>
         <button
         disabled={isSubmitting}
          type='submit'
         className='w-32 p-2 bg-green-400 mx-4 rounded-md font-semibold disabled:opacity-50'
          >Edit</button>
         </div>
        </form>
        
  )
}
