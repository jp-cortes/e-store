
'use client'
import Cookie  from 'js-cookie';
import { useRouter } from "next/navigation";
import { getCustomerbyId } from "../../services/queries/customers";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Image from 'next/image';


export default async function MyAccount() {
  const [user, setUser] = useState({} as Customer);
  const [updateProfile, setUpdateProfile] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const userId = Cookie.get('userId');
  const token = Cookie.get('token');
  const router = useRouter();

 

  useEffect(() => { 
  async function fetchData() {
  const dynamicData = await getCustomerbyId(`${userId}`);
  return setUser(dynamicData);
}
fetchData();
}, []);

if(!token) {
  return router.push('/login');
}

 function handleLogout() {
        //delete the token stored in cookies
      // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
      document.cookie='token=deleted;' + "path=/; expires=" + new Date(0).toUTCString();
      document.cookie='userId=deleted;' + "path=/; expires=" + new Date(0).toUTCString();
      // then will retun the user to the login page
     return location.reload();   
 }

 function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  console.log('update profile');
 }

  console.log(user, ' user ')
 

  return (
 
    <div className='relative grid grid-col-1 md:grid-cols-2'>
        <button
        className=' absolute right-4 w-32 p-2 bg-green-700 text-white font font-semibold rounded-md'
          onClick={handleLogout}
          type='button'
          >Log out</button>
          
      <h1 className='text-2xl font-semibold text-center'>Account</h1>

      <div className='md:col-start-1 md:col-end-2 my-8 justify-self-center'>
      <h2 className='font-normal capitalize'>Hi, {user.name}</h2>
        <div className=' gap-4'>
          <figure className='my-5'>
            <Image className='rounded-full'
            src={user.avatar} width={100} height={100} alt='user-avatar'/>
          </figure>
          <div className=''>
            <p className='my-5 font-light text-gray-700 capitalize'><b>Name: </b>{user.name}</p>
            <p className='my-5 font-light text-gray-700 capitalize'><b>Lastname: </b>{user.lastName}</p>
            <p className='my-5 font-light text-gray-700 capitalize'><b>Phone number: </b>{user.phone}</p>
          </div>
          <button
          className='w-auto p-2 bg-gray-600 text-white font font-semibold rounded-md'
          onClick={() => setUpdateProfile(true)}
          type='button'
          >Update my info</button>
        </div>
      </div>

      {updateProfile && 
      <div className='relative md:col-start-2 md:col-end-3 justify-self-center'>
        

      
        <form
        className=''
        onSubmit={handleSubmit}>
          <figure className='my-5'>
            <Image className='rounded-full'
             src={user.avatar} width={100} height={100} alt='user-avatar'/>
          </figure>
          <div className='flex flex-col '>
            <label htmlFor='name'>Name</label>
            <input name='name' className='my-4 w-40 border-2 border-gray-600 pl-2 py-2 rounded-lg font-light text-black focus:outline-emerald-500 focus:outline-2'
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
            defaultValue={user.name}/>

            <label htmlFor='lastname'>LastName</label>
            <input name='lastname' className='my-4 w-40 border-2 border-gray-600 pl-2 py-2 rounded-lg font-light text-black focus:outline-emerald-500 focus:outline-2'
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} 
            defaultValue={user.lastName}/>

            <label htmlFor='phoneNumber'>Phone Number</label>
            <input name='phoneNumber' className='my-4 w-40 border-2 border-gray-600 pl-2 py-2 rounded-lg font-light text-black focus:outline-emerald-500 focus:outline-2' 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
            defaultValue={user.phone}/>
          </div>
         <div 
         className='flex'>
         <button
         className='w-32 p-2 bg-green-400 mx-4 rounded-md font-semibold'
          type='submit'
          >Edit</button>
          <button className='w-32 p-2 bg-red-500 mx-4 rounded-md text-white font-semibold'
          onClick={() => setUpdateProfile((prevState) => !prevState)}
          type='button'
          >Cancel</button>
         </div>
        </form>
      </div>}

    </div>
    
  )
}
