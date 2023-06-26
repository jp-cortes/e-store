import Cookie  from 'js-cookie';
import { endPoints } from "./endPoints";


export async function getCustomerbyId(id: string): Promise<Customer> {
  const token = Cookie.get('token');
    //Set the Authorization header with the token

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


export async function UpdateCustomer(id: string, updatedUser: Partial<Customer>) {
  const token = Cookie.get('token');
    //Set the Authorization header with the token

    const headers = {
        Authorization: `Bearer ${token}`
      };

  const response = await fetch(`${endPoints.customers.patchUser(id)}`, 
  {
    method: 'PATCH',
    headers: headers,
  
    //make sure to serialize your JSON body
    body: JSON.stringify({
      updatedUser
    })
  } 
  );
  const data = await response.json();
  // console.log(data);
 return data;
}
 