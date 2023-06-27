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
 
export async function createCustomer(newCustomer: NewCustomer) {
  const {
    name,
    lastName,
    phone,
    avatar,
    user: {
      email,
      password,
      
    }
  } = newCustomer;
  
  const response = await fetch(`${endPoints.customers.postUsers}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    
      //make sure to serialize your JSON body
      body: JSON.stringify({
        name: name,
        lastName: lastName,
        phone: phone,
        avatar: avatar,
        user: {
          email: email,
          password: password
          
        }
      })
    })
    const data = await response.json();
    const token = data.token;
    const userId = data.user.id;
    // Cookie.set('token', token, { expires: 5 })
    //  Save the token in a cookie with the expiration date
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000); // 1 hour
    document.cookie = `token=${token}; expires=${expirationDate.toUTCString()}; path=/;`;
    document.cookie = `userId=${userId}; expires=${expirationDate.toUTCString()}; path=/;`;
    // localStorage.setItem('E-store-V1-CustomerId', JSON.stringify(data.user.id));//pending to check
   
    return data;
}