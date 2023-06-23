
'use client'
import Cookie  from 'js-cookie';
import { useRouter } from "next/navigation";
import { getCustomerbyId } from "../../services/queries/customers";
import { useEffect, useState } from "react";


export default async function MyAccount() {
  const [user, setUser] = useState(null);
  const userId = Cookie.get('userId');
  const router = useRouter();

  useEffect(() => { 
  async function fetchData() {
  const response = await getCustomerbyId(`${userId}`);
return setUser(response);
}
fetchData();
  }, []);

  console.log(user, ' user ')
  // {
  //   "id": ,
  //   "name": "",
  //   "lastName": "",
  //   "phone": "",
  //   "avatar": "",
  //   "createdAt": "",
  //   "userId": 
  // }

  return (
 
    <div>MyAccount</div>
    
  )
}
