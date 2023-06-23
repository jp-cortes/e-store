import Cookie  from 'js-cookie';
import { endPoints } from "./endPoints";


export async function getCustomerbyId(id: string) {
  const token = Cookie.get('token');
  // const userId = Cookie.get('userId');
  // if (!token && !userId) {
  //   return router.push('/login');
  // }
    // Set the Authorization header with the token

    const headers = {
        Authorization: `Bearer ${token}`
      };
      
const response = await fetch(`${endPoints.customers.profile(id)}`, {
    method: 'GET',
    headers: headers
  });
 const data = await response.json();
 return data;
}