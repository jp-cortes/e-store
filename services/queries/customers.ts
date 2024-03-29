import Cookie  from 'js-cookie';


import { endPoints } from "./endPoints";
import { UpdateValues } from '../../utils/schemas/customer';


export async function getCustomerbyId(): Promise<Customer | undefined> {

  try {
  const token = Cookie.get('token');

  //Set the Authorization header with the token
  
  const headers = {
      Authorization: `Bearer ${token}`
    };
    
  const response = await fetch(`${endPoints.users.account}`, {
  method: 'GET',
  cache: 'no-cache',
  headers: headers
  });
  
  const { customer } = await response.json();
  return customer;
  } catch (error) {
    throw new Error('undefined');
  }
}






export async function UpdateCustomer(id: string, updatedUser: Customer | UpdateValues) {
  const token = Cookie.get('token');
  const { name, lastName, phone, avatar } = updatedUser;
    
  //Set the Authorization header with the token
    const headers = {
      'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      };

  const response = await fetch(`${endPoints.customers.patchUser(id)}`, 
  {
    method: 'PATCH',
    headers: headers,
  
    //make sure to serialize your JSON body
    body: JSON.stringify({
      name: name,
      lastName: lastName,
      phone: phone,
      avatar: avatar
    })
  } 
  );
  const data = await response.json();
  // console.log(data, 'is updated');
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
  //  console.log(newCustomer,'new customer')
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
  //  console.log(data, 'data')
    return data;
}

export async function getAllCustomers() {
 try {
  const token = Cookie.get('token');
  //Set the Authorization header with the token
    const headers = {
      'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      };

  const response = await fetch(`${endPoints.customers.allCutomers}`, 
  {
    method: 'GET',
    headers: headers,
  } 
  );
  const data = await response.json();
 return data;
 } catch (error) {
  console.log(error);
  throw new Error('unauthorized')
 }
}

