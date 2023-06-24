
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
  const response = await getCustomerbyId(`${userId}`);
  return setUser(response);
}
fetchData();
}, []);

// if(!token) {
//   return router.push('/login');
// }

 function handleLogout() {
        //delete the token stored in cookies
      // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
      document.cookie='token=deleted;' + "path=/; expires=" + new Date(0).toUTCString();
      document.cookie='userId=deleted;' + "path=/; expires=" + new Date(0).toUTCString();
      // then will retun the user to the login page
      router.refresh();   
 }

 function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault()
  console.log('update profile');
 }

  console.log(user, ' user ')
 

  return (
 
    <div className='relative grid grid-col-1 md:grid-cols-2'>
        <button
          onClick={handleLogout}
          type='button'
          >close</button>
          
      <h1 className='text-2xl font-semibold'>Account</h1>
      <div className='md:col-start-1 md:col-end-2'>
      <h2 className='font-normal'>Hi, {user.name}</h2>
        <div>
          <figure>
            <Image src={user.avatar} width={50} height={50} alt='user-avatar'/>
          </figure>
          <div>
            <p className='font-light text-gray-700'>{user.name}</p>
            <p className='font-light text-gray-700'>{user.lastName}</p>
            <p className='font-light text-gray-700'>{user.phone}</p>
          </div>
          <button
          onClick={() => setUpdateProfile(true)}
          type='button'
          >Edit</button>
        </div>
      </div>

      {updateProfile && 
      <div className='relative md:col-start-1 md:col-end-2'>
        <button
          onClick={() => setUpdateProfile((prevState) => !prevState)}
          type='button'
          >close</button>

      <h2 className='font-normal'>Hi, {user.name}</h2>
        <form onSubmit={handleSubmit}>
          <figure>
            <Image src={user.avatar} width={50} height={50} alt='user-avatar'/>
          </figure>
          <div>
            <input className='font-light text-black'
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} 
            defaultValue={user.name}/>

            <input className='font-light text-black'
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} 
            defaultValue={user.lastName}/>

            <input className='font-light text-black' 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value)}
            defaultValue={user.phone}/>
          </div>
          <button
          type='submit'
          >Edit</button>
        </form>
      </div>}

    </div>
    
  )
}
