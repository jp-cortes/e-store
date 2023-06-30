
'use client'

import { useRouter } from "next/navigation";
import { Navbar } from '../../components/Navbar';
import { getCustomerbyId } from "../../services";
import Image from 'next/image';
import UpdateAccount from '../../components/UpdateAccount';
import Cookie  from 'js-cookie';
import * as Dialog from '@radix-ui/react-dialog';



export default async function MyAccount() {
  const router = useRouter();


//cookies
  const userId = Cookie.get('userId');
  const token = Cookie.get('token');

 // if there is no token will re direct to login page
 if(!token) {
  return router.push('/login');
}
 
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

  return (
 <>
    <Navbar />
    <div className='relative grid grid-col-1 place-content-center '>
        <button
        className=' absolute top-14 right-4 w-20 md:w-32 px-1 md:p-2 bg-green-400 text-white font font-semibold rounded-md'
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
        <button className="mx-auto rounded-md font-semibold textlg bg-gray-500 text-white px-4 py-2">
          Edit my profile
        </button>
      </Dialog.Trigger>
      <Dialog.Overlay className="bg-background/80 data-[state=open] fixed top-0 inset-0 grid grid-cols-1 place-content-center" />
      <Dialog.Content className="data-[state=open] w-full  translate-y-[-90%] rounded-[6px] md:col-start-1 md:col-end-2">
        
      <div className='bg-white  rounded-xl p-2 md:p-5'>
   
       <UpdateAccount user={user}/>

      </div>
      </Dialog.Content>
    </Dialog.Root>


    </div>
    
  </>
  )
}


